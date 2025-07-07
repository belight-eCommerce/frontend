// lib/api/axiosClient.ts
import { store } from '@/store/store';
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const prefix = '/api'
const ARTIFICIAL_DELAY_MS = 1000; // 1 second delay for development

const axiosClient = axios.create({
    baseURL: `${baseURL}${prefix}`,
});

export const axiosFileClient = axios.create({
    baseURL: `${baseURL}`,
    withCredentials: true,
})

axiosClient.interceptors.request.use(async (config) => {
    const token = store.getState().auth.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    if (process.env.NODE_ENV === 'development' && ARTIFICIAL_DELAY_MS > 0) {
        await new Promise(resolve => setTimeout(resolve, ARTIFICIAL_DELAY_MS));
    }

    return config;
});

axiosClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        // handle 401 Unauthorized errors
        if (error.response?.status === 401) {
            // check the current router before redirection
            if (typeof window !== 'undefined') {
                const currentPath = window.location.pathname;

                // excluded route where redirect should not happen
                const excludedRoutes = ['/signin'];

                // Only redirect if the current route is not in the excluded routes
                if (!excludedRoutes.includes(currentPath)) {
                    // window.location.href = '/signin';
                    console.log("Redirecting to /signin due to 401 Unauthorized error");
                }
            }
        }
        return Promise.reject(error);
    }
);

export default axiosClient;