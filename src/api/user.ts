import axiosClient from "@/config/axiosClient";
import { ListResponse, SingleResponse } from "@/types/Response";
import { User, UserFormValue, ChangePasswordSchema } from "@/types/User";

const prefix = "/users";

export const getUser = async (id: string) => {
    const response = await axiosClient.get<SingleResponse<User>>(`${prefix}/${id}`);
    return response.data;
};

export const getUsers = async (queryParams?: string) => {
    const response = await axiosClient.get<ListResponse<User>>(`${prefix}/?${queryParams}`);
    return response.data;
}

export const createUser = async (user: UserFormValue) => {
    const response = await axiosClient.post<SingleResponse<User>>(prefix, user);
    return response.data;
}

export const updateUser = async (id: string, user: Partial<UserFormValue>) => {
    const response = await axiosClient.put<SingleResponse<User>>(`${prefix}/${id}`, user);
    return response.data;
};

export const deleteUser = async (id: string) => {
    const response = await axiosClient.delete<SingleResponse<User>>(`${prefix}/${id}`);
    return response.data;
};

export const activateUser = async (token: string, newPassword: string) => {
    const response = await axiosClient.patch<SingleResponse<User>>(`${prefix}/reset-password`, { token, newPassword });
    return response.data;
};

export const changePassword = async (data: ChangePasswordSchema) => {
    const response = await axiosClient.patch<SingleResponse<User>>(`${prefix}/change-password`, data);
    return response.data;
}

export const requestPwdReset = async (email: string) => {
    const response = await axiosClient.post<unknown>(`${prefix}/request-password-reset`, { email });
    return response.data;
}