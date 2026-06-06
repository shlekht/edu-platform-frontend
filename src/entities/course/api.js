import { apiClient } from '../../shared/api/client';

export const getAllCourses = async () => {
  const response = await apiClient.get('/courses');
  return response.data;
};


export const getCourseById = async (id) => {
  const response = await apiClient.get(`/courses/${id}`);
  return response.data;
}


export const createCourse = async (courseData) => {
  const response = await apiClient.post('/courses', courseData);
  return response.data;
}

export const deleteCourse = async (courseId) => {
  const response = await apiClient.delete(`/courses/${courseId}`);
  return response.data;
};
