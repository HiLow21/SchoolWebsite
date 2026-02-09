import axios, { type AxiosInstance, type AxiosRequestConfig, type InternalAxiosRequestConfig } from 'axios';

const TOKEN_KEY = 'token';


export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://0.0.0.0:3000',
  timeout: 10000,
});

export const initializeApiProvider = (): void => {
  // Set up request interceptor to add token to every request
  apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    console.log('Token from localStorage:', token);

    // Add token to Authorization header if it exists
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  // Set up response interceptor to handle 401 errors
  apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Handle 401 Unauthorized errors
      if (error.response?.status === 401) {
        console.warn('Unauthorized - clearing auth and redirecting to login');
        clearAuthAndRedirect();
      }
      return Promise.reject(error);
    }
  );
};

export const getToken = (): string | null => {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    return token;
  } catch (error) {
    console.error('Error reading token from localStorage:', error);
    return null;
  }
};
export const setToken = (token: string): void => {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('Error saving token to localStorage:', error);
  }
};

export const removeToken = (): void => {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error removing token from localStorage:', error);
  }
};

export const clearAuthAndRedirect = (): void => {
  removeToken();
  redirectToLogin();
};


export const redirectToLogin = (): void => {
  window.location.href = '/admin/login';
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};
