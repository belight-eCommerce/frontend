import { useRouter } from "next/navigation";
import { useMutation } from '@tanstack/react-query';
import { LoginCredentials } from "@/types/Auth";
import { login, registerBuyer, registerSupplier, resetPassword, userLogin } from "@/api/auth";
import { toast } from "sonner";
import { toastError } from "@/lib/toastError";
import { useAppDispatch } from "@/store/store";
import { logout, setCredentials, UserRole } from "@/store/slices/auth.slice";
import { extractSingleData } from "@/lib/extract/singleData";
import { useDispatch } from "react-redux";
import { BuyerSignUpForm } from "@/components/auth/SignUpForm";
import { LoginFormValues } from "@/app/supplier/login/page";
import { SupplierRegistrationFormValues } from "@/app/supplier/registration/page";

const mockUserCredential = {
    access_token: "mockAccessToken",
    refresh_token: "mockRefreshToken",
    user: {
        _id: "mockUserId",
        id: "mockUserId",
        email: "john@doe.com",
        firstName: "John",
        lastName: "Doe",
        createdAt: new Date(),
        updatedAt: new Date(),
        isSuperAdmin: false
    },
    role: UserRole.SELLER
}

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
            // modify later with another api call or data returned from login
            dispatch(setCredentials({
                ...mockUserCredential,
                user: {
                    ...mockUserCredential.user,
                    role: UserRole.ADMIN
                },
                access_token: res.access_token,
            }));
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

export const useRegisterSupplier = () => {
    const TOAST_ID = 'REGISTER_SUPPLIER';
    return useMutation({
        mutationFn: async (supplierInfo: SupplierRegistrationFormValues) => {
            delete supplierInfo.confirmPassword
            await registerSupplier(supplierInfo)
        },
        onSuccess: () => {
            toast.success("Supplier Registered successfully", { id: TOAST_ID });
        },
        onError: (error) => toastError(error, TOAST_ID)
    })
}

export const useRegisterBuyer = () => {
    const TOAST_ID = 'REGISTER_BUYER';
    return useMutation({
        mutationFn: async (buyerInfo: BuyerSignUpForm) =>
            await registerBuyer(buyerInfo),
        onSuccess: () => {
            toast.success("You have Registered successfully", { id: TOAST_ID });
        },
        onError: (error) => toastError(error, TOAST_ID)
    })
}

export const useUserLogin = (role: UserRole) => {
    const TOAST_ID = 'USER_LOGIN';
    const dispatch = useDispatch();
    const router = useRouter();
    return useMutation({
        mutationFn: async (credentials: LoginFormValues) =>
            await userLogin(credentials),
        onSuccess: (res) => {
            toast.success("Login Successful", { id: TOAST_ID });
            dispatch(setCredentials({
                ...mockUserCredential,
                user: {
                    ...mockUserCredential.user,
                    role
                },
                access_token: res.data.access_token,
                role
            }));
            setTimeout(() => {
                if (role === UserRole.SELLER) {
                    router.push("/supplier/dashboard");
                } else {
                    router.push("/shop");
                }
            }, 1000)
        },
        onError: (error) => toastError(error, TOAST_ID)
    })
}