import { useNavigate } from "react-router";
import styles from "./CourseCard.module.css";

export const CourseCard = ({ course, authorName }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${course.id}`);
  };



  return (
    <div className={styles.card} onClick = {handleClick}>
      <div className={styles.title}>{course.title}</div>
      <div className={styles.meta}>{authorName}</div>
    </div>
  );
};