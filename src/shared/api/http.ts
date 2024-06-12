import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BASE_URL, RUNTIME_ENV } from '@/shared/constants';

export const client = axios.create({
  baseURL: BASE_URL[RUNTIME_ENV],
  timeout: 1000,
});

interface httpClient extends AxiosRequestConfig {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<T>;
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
  delete: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<T>;
}

export const http: httpClient = client;

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
