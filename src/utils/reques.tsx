/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const request = axios.create({
  timeout: 60000,
  headers: {
    "Content-Type": "application/json-patch+json",
  },
});

const handleError = (error:any) => {
  const { response = {} } = error;
  const { data, status, statusText } = response;
  return { data, status, statusText };
};

request.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

request.interceptors.response.use((response) => {
  return response;
}, handleError);

export default request;
