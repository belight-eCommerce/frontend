import { z } from "zod";
import { User } from "./User";

export const loginFormSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const resetPasswordFormSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters long"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export const forgotPasswordFormSchema = z.object({
    email: z.string().email("Invalid email address"),
});

export type LoginCredentials = z.infer<typeof loginFormSchema>;
export type ResetPasswordFormValue = z.infer<typeof resetPasswordFormSchema>;
export type ForgotPasswordFormValue = z.infer<typeof forgotPasswordFormSchema>;
export interface LoginResponse extends User {
    access_token: string;
    refresh_token: string;
};