import { useParams } from "react-router";
import { useState } from "react";
import { getCourseById } from "../../entities/course/model/getCourseById";


import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { CommentsSection } from '../../widgets/commentsSection/CommentsSection';
import { Container } from "../../shared/ui/Container/Container";

import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown-light.css";


import { ContentSwitcher } from "../../features/switchContent/ui/ContentSwitcher";
import { getDefaultCourseById } from "../../entities/course/model/defaultCourses";

export const CoursePage = () => {
  const { type, id } = useParams();
  
  const course = type === 'default'
  ? getDefaultCourseById(id)
  : getCourseById(id);


  const [activeTab, setActiveTab] = useState("course");

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
        <div className="markdown-body" style={{ backgroundColor: "#F3F4F6", paddingTop: "30px"}}>
            <ReactMarkdown>
              {course.content}
            </ReactMarkdown>
          </div>
      ) : (
        <div style = {{display: "flex",
      justifyContent: "center",
      
      
      }}>
        <CommentsSection />
        </div>
      )}

      </Container>
    <Footer />
    </>
  );
};