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

import { ContentSwitcher } from "../../features/switchContent/ui/ContentSwitcher";
import { useCourse } from "../../entities/course/hooks";
import { useComments } from "../../entities/comment/hooks";
import { useDeleteCourse } from "../../features/deleteCourse/useDeleteCourse";

export const CoursePage = () => {
  const { type, id } = useParams();
  const [activeTab, setActiveTab] = useState("course");

  const { user } = useUserContext();
  useEffect(() => {
    if (!user) {
      alert("Для просмотра курса необходимо войти в систему.");
      window.location.href = "/";
    }
  }, [user]);

  const { course, isLoading } = useCourse(id, type); // custom hook for getCourseById
  const { comments, commentsLoading } = useComments(id); // custom hook for getCommentsByCourseId
  const { handleDelete } = useDeleteCourse(id); // custom hook for deleteCourse

  if (isLoading) {
    return <div>Загрузка курса...</div>;
  }
  if (!course) {
    return <div>Курс не найден или удалён.</div>;
  }

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
          isLoading ? (
            <p>Загрука курса...</p>
          ) : (
            <div
              className="markdown-body"
              style={{ backgroundColor: "#F3F4F6", paddingTop: "30px" }}
            >
              {" "}
              <h4>Описание: {course.description}</h4>
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
