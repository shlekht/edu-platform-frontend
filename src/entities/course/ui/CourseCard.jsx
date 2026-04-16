import styles from "./CourseCard.module.css";

export const CourseCard = ({ title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.meta}>Имя пользователя</div>
    </div>
  );
};