import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { CourseSection } from "../../widgets/CourseSection/CourseSection";
import { ChatWidget } from "../../widgets/ChatWidget/ChatWidget";

import { defaultCourses } from "../../entities/course/model/defaultCourses";
import { useCourses } from "../../entities/course/hooks";

import styles from "./HomePage.module.css";

export const HomePage = () => {
  const { customCourses, isLoading } = useCourses(); // custom hook for getAllCourses

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <CourseSection
          title="Курсы платформы"
          courses={defaultCourses}
          type="default"
        />
        {isLoading ? (
          <p align="center">Загрузка курсов...</p>
        ) : (
          <CourseSection
            title="Пользовательские курсы"
            courses={customCourses}
            type="custom"
          />
        )}
      </main>
      <ChatWidget />
      <Footer />
    </div>
  );
};
