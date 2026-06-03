import { useParams } from "react-router";
import { useState, useEffect } from "react";
//import { getCourseById } from "../../entities/course/model/getCourseById";


import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { CommentsSection } from '../../widgets/commentsSection/CommentsSection';
import { Container } from "../../shared/ui/Container/Container";

import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown-light.css";

import { getCourseById } from "../../entities/course/api";  
import { getCommentsByCourseId } from "../../entities/comment/api"; 
import { ContentSwitcher } from "../../features/switchContent/ui/ContentSwitcher";
import { getDefaultCourseById } from "../../entities/course/model/defaultCourses";

export const CoursePage = () => {
  const { type, id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("course");

  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);


  // useEffect на сам курс
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);

        if (type === 'default') {
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
    console.log('fetchComments useEffect сработал, id:', id);
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

  if (!course) {
    return <div>Курс не найден или удалён.</div>;
  }

  return (
    <>
    <Header />
    <Container>
      {type === 'custom' ? (
        <ContentSwitcher
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      ):(
        <></>

      )}
      

    {activeTab === "course" ? (
  loading ? (
    <p>Загрука курса...</p>
  ) : (
    <div className="markdown-body" style={{ backgroundColor: "#F3F4F6", paddingTop: "30px" }}>
      <ReactMarkdown>
        {course.content}
      </ReactMarkdown>
    </div>
  )
) : (
  <div style={{ display: "flex", justifyContent: "center" }}>
    {commentsLoading ? (
      <p>Загрузка комментариев...</p>
    ) : (
      <>
       {console.log('Является ли массивом:', Array.isArray(comments))}
{console.log('Комментарии:', comments)}
      <CommentsSection commentsList={comments}/>
      </>
    )}
  </div>
)}

      </Container>
    <Footer />
    </>
  );
};