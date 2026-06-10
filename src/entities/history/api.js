import { apiClient } from '../../shared/api/client';

export const getHistory = async () => {
  const response = await apiClient.get('/history');
  return response.data;
};