import { activateUser, changePassword, createUser, deleteUser, getUser, getUsers, requestPwdReset, updateUser } from "@/api/user"
import { toastError } from "@/lib/toastError"
import { ChangePasswordSchema, User, UserFormValue } from "@/types/User"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useGetUser = (id: string) => {
    return useQuery({
        queryKey: ["user", id],
        queryFn: async () => await getUser(id)
    })
}

export const useGetUsers = (queryParams?: string) => {
    return useQuery({
        queryKey: ["users", queryParams],
        queryFn: async () => await getUsers(queryParams || "")
    })
}

export const useCreateUser = () => {
    const queryClient = useQueryClient();
    const TOAST_ID = 'CREATE_USER';
    return useMutation({
        mutationFn: async (data: UserFormValue) => {
            return await createUser(data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            toast.success("User created successfully", { id: TOAST_ID });
        },
        onError: (error) => toastError(error, TOAST_ID)
    })
}

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    const TOAST_ID = 'UPDATE_USER';
    return useMutation({
        mutationFn: async ({ id, data }: { id: User['_id'], data: Partial<UserFormValue> }) =>
            await updateUser(id, data),
        onSuccess: (res) => {
            const { _id } = res.data;
            queryClient.invalidateQueries({ queryKey: ["users"] });
            queryClient.invalidateQueries({ queryKey: ["user", _id] });
            toast.success("User updated successfully", { id: TOAST_ID });
        },
        onError: (error) => toastError(error, TOAST_ID)
    })
}

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    const TOAST_ID = 'DELETE_USER';
    return useMutation({
        mutationFn: async (id: User['_id']) =>
            await deleteUser(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            toast.success("User deleted successfully", { id: TOAST_ID });
        },
        onError: (error) => toastError(error, TOAST_ID)
    })
}

export const useActivateUser = () => {
    const TOAST_ID = 'ACTIVATE_USER';
    return useMutation({
        mutationFn: async ({ token, newPassword }: { token: string, newPassword: string }) =>
            await activateUser(token, newPassword),
        onSuccess: () => {
            toast.success("Password Reset Successful", { id: TOAST_ID });
        },
        onError: (error) => toastError(error, TOAST_ID)
    })
}

export const useChangePassword = () => {
    const TOAST_ID = 'CHANGE_PASSWORD';
    return useMutation({
        mutationFn: async (data: ChangePasswordSchema) => await changePassword(data),
        onSuccess: () => {
            toast.success("Password Reset Successfully", { id: TOAST_ID });
        },
        onError: (error) => toastError(error, TOAST_ID)
    })
}

export const useRequestPwdReset = () => {
    const TOAST_ID = 'REQUEST_PWD_RESET';
    return useMutation({
        mutationFn: async (email: string) => await requestPwdReset(email),
        onSuccess: () => {
            toast.success("Password reset link sent to your email", { id: TOAST_ID });
        },
        onError: (error) => toastError(error, TOAST_ID)
    })
}