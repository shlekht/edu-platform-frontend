import { useParams } from "react-router";
import { getCourseById } from "../../entities/course/model/getCourseById";

import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";

export const CoursePage = () => {
  const { id } = useParams();

  const course = getCourseById(id);

  if (!course) {
    return <div>Курс не найден или удалён.</div>;
  }

  return (
    <>
    <Header />

    <div style={{ padding: "20px"}}>
      <h1>Контент курса {course.title}</h1>
    </div>
    <Footer />
    </>
  );
};