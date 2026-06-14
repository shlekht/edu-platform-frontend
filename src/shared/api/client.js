import axios from 'axios';

const AUTH_ENDPOINTS = ['/auth/token', '/auth/register'];

export const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 20000,
  headers: { 'X-Custom-Header': 'my-custom-value' }
});

// Перехватчик запросов: добавляет токен перед отправкой
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Перехватчик ответов: ловит 401 ошибку (токен устарел или неверен)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const token = localStorage.getItem('token');

    if (
      error.response?.status === 401 &&
      token
    ) {
      localStorage.removeItem('token');
      alert('Сессия истекла. Войдите снова.');
      window.location.href = '/';
    }

    return Promise.reject(error);
  }
);