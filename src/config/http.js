// This file configures the HTTP client for making API requests.
// It uses Axios to create an instance with a base URL and default headers.
// It also sets up request and response interceptors for handling authentication tokens and errors.
// Importing axios for HTTP requests

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://promptly.test/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  // Include credentials if using session auth
  withCredentials: true
});

// Request interceptor
api.interceptors.request.use(
  config => {
    // You can modify the request config here
    // For example, add auth token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  response => {
    // You can modify successful responses here
    return response;
  },
  error => {
    // Handle errors globally
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      // router.push('/login');
    }
    return Promise.reject(error);
  }
);

export default api;