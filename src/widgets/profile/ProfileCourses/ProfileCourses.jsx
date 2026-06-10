import { CourseCard } from '../../../entities/course/ui/CourseCard';
import styles from './ProfileCourses.module.css';

export const ProfileCourses = ({ courses }) => {
  const enrichedCourses = Array.isArray(courses) ? courses : [];

  if (enrichedCourses.length === 0) {
    return <div>У вас пока нет посещенных курсов.</div>;
  }

  return (
    <div><h3 style = {{margin: "15px"}}>Последние посещенные курсы:</h3>
    <div className={styles.grid}>
      {enrichedCourses.map((item) => (
        <CourseCard
          key={item.course_id}
          course={{
            id: item.course_id,
            title: item.title,
          }}
          authorName={item.authorName}
          courseType = "custom"
        />
      ))}
    </div>
    </div>
  );
};