import { useNavigate } from "react-router";
import styles from "./CourseCard.module.css";

export const CourseCard = ({ course, authorName, courseType }) => {

  const navigate = useNavigate();
  const type = courseType
  const handleClick = () => {
    navigate(`/courses/${type}/${course.id}`);
  };

  return (
    <div className={styles.card} onClick = {handleClick}>
      <div className={styles.title}>{course.title}</div>
      <div className={styles.meta}>
        {courseType === "default" ? "Платформа Zerde" : authorName}
      </div>
    </div>
  );
};