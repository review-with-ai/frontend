import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@/shared';

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export const http = {
  get: async function get(url: string, config?: AxiosRequestConfig) {
    const response = await client.get(url, config);
    return response.data;
  },
  post: async function post(url: string, data?: any, config?: AxiosRequestConfig) {
    const response = await client.post(url, data, config);
    return response.data;
  },
  put: async function put(url: string, data?: any, config?: AxiosRequestConfig) {
    const response = await client.put(url, data, config);
    return response.data;
  },
  patch: async function patch(url: string, data?: any, config?: AxiosRequestConfig) {
    const response = await client.patch(url, data, config);
    return response.data;
  },
  delete: async function del(url: string, config: AxiosRequestConfig) {
    const response = await client.delete(url, config);
    return response.data;
  },
};

export const handleAxiosError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    console.error('Axios error: ', axiosError);
    return (
      axiosError.response?.data || {
        success: false,
        message: axiosError.message,
      }
    );
  }
  console.error('Unexpected error: ', error);
  return {
    success: false,
    message: 'Unexpected error',
  };
};
