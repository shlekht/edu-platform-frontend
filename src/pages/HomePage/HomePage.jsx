import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { CourseSection } from "../../widgets/CourseSection/CourseSection";

import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        <CourseSection title="Курсы платформы" />
        <CourseSection title="Пользовательские курсы" showFilter />
      </main>

      <Footer />
    </div>
  );
};