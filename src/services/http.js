import axios from 'axios';

const http = axios.create({
  baseURL: 'https://tu-api.com', // Reemplaza con la URL de tu API
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default http;
