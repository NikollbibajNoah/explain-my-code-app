import axios from 'axios';

const backendURL: string = import.meta.env.VITE_BACKEND_URL;

export const axiosInstance = axios.create({
  baseURL: backendURL,
  // timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});