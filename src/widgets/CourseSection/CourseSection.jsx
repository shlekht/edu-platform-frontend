import styles from "./CourseSection.module.css";
import { Container } from "../../shared/ui/Container/Container";
import { CourseCard } from "../../entities/course/ui/CourseCard";

export const CourseSection = ({ title, courses, showFilter }) => {
  // const mockCourses = Array.from({ length: 6 }).map((_, i) => ({
  //   id: i,
  //   title: `Курс ${i + 1}`,
  // }));

  const coursesToDisplay = courses
  const courseType = coursesToDisplay[0].title === 'Добро пожаловать!' ? 'default' : 'custom';

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>{title}</h2>

          {showFilter && <button className={styles.filter}>Фильтр</button>}
        </div>

        <div className={styles.grid}>
          {coursesToDisplay.map((c) => (
            <CourseCard key={c.id} course={c} authorName="User" courseType={courseType} />
          ))}
        </div>
      </Container>
    </section>
  );
};