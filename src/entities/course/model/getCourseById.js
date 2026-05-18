export const mockCourses = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: `Курс ${i + 1}`,
  content: `Содержание курса ${i + 1}. Этот курс предназначен для изучения казахского языка с нуля. В курсе представлены уроки по грамматике, лексике и разговорной практике.`,
}));

export const getCourseById = (id) => {
  return mockCourses.find((course) => course.id === Number(id)) || null;
};