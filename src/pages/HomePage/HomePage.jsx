import { useState, useEffect } from "react";

import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { CourseSection } from "../../widgets/CourseSection/CourseSection";

import styles from "./HomePage.module.css";

import { defaultCourses } from "../../entities/course/model/defaultCourses";
import { getAllCourses } from "../../entities/course/api";
//import { mockCourses } from "../../entities/course/model/getCourseById";

export const HomePage = () => {
  const [customCourses, setCustomCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCourses()
      .then((data) => {
        setCustomCourses(data || []);
      })
      .catch((err) => console.error('Ошибка при загрузке курсов:', err))
      .finally(() => setIsLoading(false));
  }, []);
  
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <CourseSection title="Курсы платформы" courses={defaultCourses} type = "default"/>
        {isLoading ? <p align = "center">Загрузка курсов...</p> :
          <CourseSection title="Пользовательские курсы" courses={customCourses} type = "custom"/>
        }
      </main>

      <Footer />
    </div>
  );
};