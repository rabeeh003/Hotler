import axios from 'axios';
import { baseURL } from '../const-values';
import { getCookie } from '../cookie';

export const shopAPI = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

shopAPI.interceptors.request.use((config) => {
  const token = getCookie('token');
  console.log("token", token);
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default shopAPI;
