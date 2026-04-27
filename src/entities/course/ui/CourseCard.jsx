import styles from "./CourseCard.module.css";

export const CourseCard = ({ course, authorName }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{course.title}</div>
      <div className={styles.meta}>{authorName}</div>
    </div>
  );
};