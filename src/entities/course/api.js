import { apiClient } from '../../shared/api/client';

export const getAllCourses = async () => {
  const response = await apiClient.get('/get_all_courses');
  return response.data;
};