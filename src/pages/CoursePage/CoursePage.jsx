import { useParams } from "react-router";
import { useState } from "react";
import { getCourseById } from "../../entities/course/model/getCourseById";

//import { getDefaultCourseById } from "../../entities/course/model/defaultCourses";

import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { CommentsSection } from '../../widgets/commentsSection/CommentsSection';
import { Container } from "../../shared/ui/Container/Container";

import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";

import { ContentSwitcher } from "../../features/switchContent/ui/ContentSwitcher";
import { getDefaultCourseById } from "../../entities/course/model/defaultCourses";

export const CoursePage = () => {
  const { type, id } = useParams();
  
  const course = type === 'default'
  ? getDefaultCourseById(id)
  : getCourseById(id);

  //const course = getCourseById(id);
  //const defaultCourse = getDefaultCourseById(id);

  const [activeTab, setActiveTab] = useState("course");

  if (!course) {
    return <div>Курс не найден или удалён.</div>;
  }

  return (
    <>
    <Header />
    <Container>
      <ContentSwitcher
        activeTab={activeTab}
        onChange={setActiveTab}
      />

    {activeTab === "course" ? (
        <div className="markdown-body">
            <ReactMarkdown>
              {course.content}
            </ReactMarkdown>
          </div>
      ) : (
        <CommentsSection />
      )}

      </Container>
    <Footer />
    </>
  );
};