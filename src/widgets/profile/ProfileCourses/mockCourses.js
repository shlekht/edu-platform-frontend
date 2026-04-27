export const mockCourses = Array.from({ length: 6 }).map((_, i) => ({
  id: i.toString(),
  title: `Курс ${i + 1}`,
  description: 'Test course',
  author_id: i % 2 === 0 ? '1' : '2'
}));