import axiosClient from "@/config/axiosClient";
import { SingleResponse } from "@/types/Response";
import { AdminSignInSchema } from "@/components/auth/AdminSignInForm";
import { User } from "@/types/User";

const prefix = "auth";

// Admin login response type
interface AdminLoginResponse {
    access_token: string;
    refresh_token: string;
    user: User;
    role: string;
}

// Admin login API function with fallback route
export const adminLogin = async (credentials: AdminSignInSchema) => {
    try {
        const primary = await axiosClient.post<SingleResponse<AdminLoginResponse>>(`${prefix}/admin/login`, {
            ...credentials,
            role: "admin",
        });
        return primary.data;
    } catch {
        // Fallback to /auth/login if /auth/admin/login is not available
        const fallback = await axiosClient.post<SingleResponse<AdminLoginResponse>>(`${prefix}/login`, {
            ...credentials,
            role: "admin",
        });
        return fallback.data;
    }
};

// Admin logout API function
export const adminLogout = async () => {
    const response = await axiosClient.post(`${prefix}/admin/logout`);
    return response.data;
};

// Get admin profile API function
export const getAdminProfile = async () => {
    const response = await axiosClient.get<SingleResponse<User>>(`${prefix}/admin/profile`);
    return response.data;
};

// Get admin user info API function (alternative endpoint)
export const getAdminUserInfo = async () => {
    const response = await axiosClient.get<SingleResponse<User>>(`${prefix}/admin/me`);
    return response.data;
};

// Get admin user info by ID API function
export const getAdminUserById = async (userId: string) => {
    const response = await axiosClient.get<SingleResponse<User>>(`${prefix}/admin/users/${userId}`);
    return response.data;
};
