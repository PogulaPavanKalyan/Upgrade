import axios from "axios";

const BaseUrl = axios.create({
  baseURL: "http://localhost:8082/",
});

// ✅ SAFE JWT INTERCEPTOR
BaseUrl.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // attach only VALID JWT
    if (token && token.split(".").length === 3) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default BaseUrl;
