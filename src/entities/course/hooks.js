import { useState, useEffect } from "react";
import { getCourseById } from "./api";
import { getDefaultCourseById } from "./model/defaultCourses";

export const useCourse = (id, type) => {
  const [course, setCourse] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        if (type === "default") {
          const data = getDefaultCourseById(id);
          setCourse(data);
        } else {
          const data = await getCourseById(id);
          setCourse(data);
        }
      } catch (err) {
        console.error("Ошибка при загрузке курса:", err);
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [type, id]);

  return { course, isLoading };
};
