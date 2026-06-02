import { apiClient } from '../../shared/api/client';


export const registerUser = async (userData) => {
  const response = await apiClient.post('auth/register', userData);
  return response.data;
};


export const loginUser = async ({ username, password }) => {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
    console.log('Отправляем на сервер:', { username, password });
  const response = await apiClient.post('auth/token', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data; 
};


export const getMe = async () => {
  const response = await apiClient.get('user/me');
  return response.data;
};