import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useUserContext } from "../../entities/user/model/userContext";

import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { ChatWidget } from "../../widgets/ChatWidget/ChatWidget";
import { CommentsSection } from "../../widgets/CommentsSection/CommentsSection";
import { Container } from "../../shared/ui/Container/Container";
import { Button } from "../../shared/ui/Button/Button";

import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown-light.css";

import { getCourseById, deleteCourse } from "../../entities/course/api";
import { getDefaultCourseById } from "../../entities/course/model/defaultCourses";
import { getCommentsByCourseId } from "../../entities/comment/api";
import { ContentSwitcher } from "../../features/switchContent/ui/ContentSwitcher";

export const CoursePage = () => {
  const { type, id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("course");

  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const { user } = useUserContext();

  useEffect(() => {
    

    if (!user) {
      alert("Для просмотра курса необходимо войти в систему.");
      window.location.href = "/";
    }
  }, [user]);

  // useEffect на сам курс
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);

        if (type === "default") {
          const data = getDefaultCourseById(id);
          setCourse(data);
        } else {
          const data = await getCourseById(id);
          setCourse(data);
        }
      } catch (error) {
        console.error("Ошибка при загрузке курса:", error);
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [type, id]);

  // useEffect на комментарии курса
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setCommentsLoading(true);
        const data = await getCommentsByCourseId(id);
        setComments(data);
      } catch (error) {
        console.error("Ошибка при загрузке комментариев:", error);
      } finally {
        setCommentsLoading(false);
      }
    };

    fetchComments();
  }, [id]);
  if (loading) {
    return <div>Загрузка курса...</div>;
  }
  if (!course) {
    return <div>Курс не найден или удалён.</div>;
  }

  const handleDelete = async () => {
    if (window.confirm("Вы уверены, что хотите удалить этот курс?")) {
      try {
        await deleteCourse(id);
        alert("Курс успешно удалён.");
        window.location.href = "/";
      } catch (error) {
        console.error("Ошибка при удалении курса:", error);
      }
    }
  };

  const canDelete = type === "custom" && user && user.id === course.author_id;

  return (
    <>
      <Header />
      <Container>
        {type === "custom" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ContentSwitcher activeTab={activeTab} onChange={setActiveTab} />

            {canDelete && (
              <Button
                onClick={handleDelete}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  margin: "10px",
                }}
              >
                Удалить курс
              </Button>
            )}
          </div>
        ) : null}

        {activeTab === "course" ? (
          loading ? (
            <p>Загрука курса...</p>
          ) : (
            <div
              className="markdown-body"
              style={{ backgroundColor: "#F3F4F6", paddingTop: "30px" }}
            > <h4>Описание: {course.description}</h4>
              <ReactMarkdown>{course.content}</ReactMarkdown>
            </div>
          )
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {commentsLoading ? (
              <p>Загрузка комментариев...</p>
            ) : (
              <>
                <CommentsSection commentsList={comments} id={id} />
              </>
            )}
          </div>
        )}
      </Container>
      <></>
      <ChatWidget />
      <Footer />
    </>
  );
};
