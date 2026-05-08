import { useParams } from "react-router";
import { useState } from "react";
import { getCourseById } from "../../entities/course/model/getCourseById";

import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { CommentsSection } from '../../widgets/commentsSection/CommentsSection';
import { Container } from "../../shared/ui/Container/Container";

import { ContentSwitcher } from "../../features/switchContent/ui/ContentSwitcher";

export const CoursePage = () => {
  const { id } = useParams();

  const course = getCourseById(id);

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
        <div style={{ padding: "20px"}}>
          <h1>Контент курса {course.title}</h1>
        </div>
      ) : (
        <CommentsSection />
      )}

      </Container>
    <Footer />
    </>
  );
};