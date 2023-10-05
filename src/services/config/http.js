import axios from 'axios';

const token = localStorage.getItem('token');

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// http.interceptors.request.use(
//   async function (config) 
//   {
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error)
//   }
// );

http.interceptors.request.use(
  async function (config) {
    if (token) config.headers['Authorization'] = token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default http;
