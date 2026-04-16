import styles from "./CourseSection.module.css";
import { Container } from "../../shared/ui/Container/Container";
import { CourseCard } from "../../entities/course/ui/CourseCard";

export const CourseSection = ({ title, showFilter }) => {
  const mockCourses = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    title: `Курс ${i + 1}`,
  }));

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>{title}</h2>

          {showFilter && <button className={styles.filter}>Фильтр</button>}
        </div>

        <div className={styles.grid}>
          {mockCourses.map((c) => (
            <CourseCard key={c.id} title={c.title} />
          ))}
        </div>
      </Container>
    </section>
  );
};