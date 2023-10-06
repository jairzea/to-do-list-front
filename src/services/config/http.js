import axios from 'axios';

// Esta función asincrónica espera a que el token se almacene en localStorage
async function getAuthToken() {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('token');
    if (token) {
      resolve(token);
    } else {
      reject(new Error('Token no encontrado en localStorage'));
    }
  });
}
const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

http.interceptors.request.use(
  async function (config) {
    try {
      const token = await getAuthToken();
      config.headers['Authorization'] = token;
    } catch (error) {
      // console.error(error);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default http;
