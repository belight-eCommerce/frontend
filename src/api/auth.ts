import axiosClient from "@/config/axiosClient";
import { LoginCredentials, LoginResponse } from "@/types/Auth";
import { SingleResponse } from "@/types/Response";
import { User } from "@/types/User";

const prefix = "/auth";

export const login = async (credentials: LoginCredentials) => {
    const response = await axiosClient.post<SingleResponse<LoginResponse>>(`${prefix}/admin/login`, credentials);
    return response.data;
};

export const logout = async () => {
    const response = await axiosClient.post(`${prefix}/admin/logout`);
    return response.data;
};

export const resetPassword = async (token: string, newPassword: string) => {
    const response = await axiosClient.patch<SingleResponse<User>>(`${prefix}/reset-password`, { token, newPassword });
    return response.data;
};