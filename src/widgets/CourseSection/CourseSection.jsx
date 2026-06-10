import styles from "./CourseSection.module.css";
import { Container } from "../../shared/ui/Container/Container";
import { CourseCard } from "../../entities/course/ui/CourseCard";

export const CourseSection = ({ title, courses, type}) => {

  const coursesToDisplay = courses
  console.log(coursesToDisplay)
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>{title}</h2>

          
        </div>

        <div className={styles.grid}>
          {coursesToDisplay.map((c) => (
            <CourseCard key={c.id} course={c} authorName={c.author} courseType={type} />
          ))}
        </div>
      </Container>
    </section>
  );
};