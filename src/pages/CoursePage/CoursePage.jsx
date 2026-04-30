import { useParams } from "react-router-dom";
import { getCourseById } from "../../entities/course/model/getCourseById";

export const CoursePage = () => {
  const { id } = useParams();

  const course = getCourseById(id);

  if (!course) {
    return <div>Курс не найден или удалён.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Контент курса {course.title}</h1>
    </div>
  );
};