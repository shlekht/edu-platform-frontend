import { CourseCard } from '../../../entities/course/ui/CourseCard/CourseCard';
import { mockCourses } from './mockCourses';
import styles from './ProfileCourses.module.css';

export const ProfileCourses = ({ users }) => {
  const enrichedCourses = mockCourses.map((course) => {
    const author = users.find((u) => u.id === course.author_id);

    return {
      course,
      authorName: author?.name || 'Unknown'
    };
  });

  return (
    <div className={styles.grid}>
      {enrichedCourses.map((item) => (
        <CourseCard
          key={item.course.id}
          course={item.course}
          authorName={item.authorName}
        />
      ))}
    </div>
  );
};