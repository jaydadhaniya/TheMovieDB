import axios from "axios";

const $axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

// Request interceptor
$axios.interceptors.request.use(
  function (config) {
    if (config.url.includes("?")) {
      config.url += `&api_key=${import.meta.env.VITE_API_KEY}`;
    } else {
      config.url += `?api_key=${import.meta.env.VITE_API_KEY}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor
$axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error.response.data);
  }
);

export default $axios;
