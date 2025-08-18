/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginFormValues } from "@/app/supplier/login/page";
import { SupplierRegistrationFormValues } from "@/app/supplier/registration/page";
import { BuyerSignUpForm } from "@/components/auth/SignUpForm";
import axiosClient from "@/config/axiosClient";
import { LoginCredentials, LoginResponse } from "@/types/Auth";
import { SingleResponse } from "@/types/Response";
import { User } from "@/types/User";

const prefix = "auth";

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

export const registerSupplier = async (supplierInfo: SupplierRegistrationFormValues) => {
    const response = await axiosClient.post<SingleResponse<any>>(`${prefix}/register`, supplierInfo);
    return response.data;
}

export const registerBuyer = async (buyerInfo: BuyerSignUpForm) => {
    const response = await axiosClient.post<SingleResponse<any>>(`${prefix}/register`, buyerInfo);
    return response.data;
}

export const userLogin = async (credentials: LoginFormValues) => {
    const response = await axiosClient.post<SingleResponse<LoginResponse>>(`${prefix}/login`, credentials);
    return response.data;
}