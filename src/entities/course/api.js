import { apiClient } from '../../shared/api/client';

export const getAllCourses = async () => {
  const response = await apiClient.get('/courses');
  return response.data;
};


export const getCourseById = async (id) => {
  const response = await apiClient.get(`/courses/${id}`);
  return response.data;
}



