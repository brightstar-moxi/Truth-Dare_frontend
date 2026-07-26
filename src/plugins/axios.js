// import axios from 'axios'

// const api = axios.create({
//   baseURL: 'http://localhost:3000/api', // adjust if backend is hosted elsewhere
//   withCredentials: true, // ✅ allows sending/receiving cookies
// })

// export default api
import axios from "axios";

const api = axios.create({
  baseURL: "https://truth-or-dare-backend-3o9y.onrender.com/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;