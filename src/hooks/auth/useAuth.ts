import { useRouter } from "next/navigation";
import { useMutation } from '@tanstack/react-query';
import { LoginCredentials } from "@/types/Auth";
import { login, resetPassword } from "@/api/auth";
import { toast } from "sonner";
import { toastError } from "@/lib/toastError";
import { useAppDispatch } from "@/store/store";
import { logout, setUser } from "@/store/slices/auth.slice";
import { extractSingleData } from "@/lib/extract/singleData";

export const useLogin = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const TOAST_ID = 'login-toast';

    return useMutation({
        mutationFn: async (data: LoginCredentials) => {
            const response = await login(data);
            return response;
        },
        onSuccess: (data) => {
            const res = extractSingleData(data);
            toast.success('Login successful', { id: TOAST_ID, duration: 500 });
            dispatch(setUser(res));
            router.push('/admin');
        },
        onError: (error) => {
            toastError(error, TOAST_ID);
        },
    });
};

export const useLogout = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const TOAST_ID = 'logout-toast';

    return useMutation({
        mutationFn: async () => {
            toast.success('Logout successful', { id: TOAST_ID, duration: 500 });
            dispatch(logout());
            router.push('/admin/signin');
        },
    });
}

export const useResetPassword = () => {
    const TOAST_ID = 'RESET_PASSWORD';
    return useMutation({
        mutationFn: async ({ token, newPassword }: { token: string, newPassword: string }) =>
            await resetPassword(token, newPassword),
        onSuccess: () => {
            toast.success("Password Reset Successful", { id: TOAST_ID });
        },
        onError: (error) => toastError(error, TOAST_ID)
    })
}