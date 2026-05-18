import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { CourseSection } from "../../widgets/CourseSection/CourseSection";

import styles from "./HomePage.module.css";

import { defaultCourses } from "../../entities/course/model/defaultCourses";
import { mockCourses } from "../../entities/course/model/getCourseById";

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        <CourseSection title="Курсы платформы" courses={defaultCourses} />
        <CourseSection title="Пользовательские курсы" courses={mockCourses} showFilter />
      </main>

      <Footer />
    </div>
  );
};