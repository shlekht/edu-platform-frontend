import axios from 'axios';




export const apiClient = axios.create({
  baseURL: '',
  timeout: 5000,
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
    if (error.response && error.response.status === 401) {
      // Токен невалиден — чистим хранилище и, например, редиректим на логин
      localStorage.removeItem('token');
      window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);