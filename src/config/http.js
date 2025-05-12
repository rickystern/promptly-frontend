// This file configures the HTTP client for making API requests.
// It uses Axios to create an instance with a base URL and default headers.
// It also sets up request and response interceptors for handling authentication tokens and errors.
// Importing axios for HTTP requests

import axios from "axios";

const http = axios.create({
  baseURL: "https://promptly.test/",
  timeout: 60000,
});

http.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
http.defaults.headers.common["Accept"] = "application/json";
http.defaults.headers.post["Content-Type"] = "application/json";
http.defaults.headers.put["Content-Type"] = "application/json";
http.defaults.withCredentials = true;

// Request interceptor
http.interceptors.request.use(
  (config) => {
    // Token will be dynamic so we can use any app-specific way to always
    // fetch the new token before making the call

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status == 401 || error.response.status === 419) {
      // TODO
      // implement some code to redirect to login page

      return new Promise(() => {});
    }

    return Promise.reject(error);
  }
);

// Step-4: Export the newly created Axios instance to be used in different locations.
export default http;
