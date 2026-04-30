const mockCourses = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: `Курс ${i + 1}`,
}));

export const getCourseById = (id) => {
  return mockCourses.find((course) => course.id === Number(id)) || null;
};