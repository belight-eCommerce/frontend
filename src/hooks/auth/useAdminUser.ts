import { useQuery } from '@tanstack/react-query';
import { toast } from "sonner";
import { toastError } from "@/lib/toastError";
import { useAppDispatch } from "@/store/store";
import { updateUser, setUserLoading, setUserError } from "@/store/slices/auth.slice";
import { getAdminProfile, getAdminUserById } from "@/api/admin";
import { extractSingleData } from "@/lib/extract/singleData";

// Hook to fetch admin user profile
export const useAdminProfile = () => {
    const dispatch = useAppDispatch();
    const TOAST_ID = 'admin-profile-toast';

    return useQuery({
        queryKey: ['admin-profile'],
        queryFn: async () => {
            dispatch(setUserLoading(true));
            dispatch(setUserError(null));
            
            try {
                const response = await getAdminProfile();
                const userData = extractSingleData(response);
                dispatch(updateUser({ user: userData }));
                toast.success('Admin profile loaded successfully', { id: TOAST_ID });
                return response;
            } catch (error) {
                dispatch(setUserError('Failed to fetch admin profile'));
                toastError(error, TOAST_ID);
                throw error;
            } finally {
                dispatch(setUserLoading(false));
            }
        },
        enabled: false,
        retry: 2,
        retryDelay: 1000,
    });
};

// Hook to fetch admin user info by ID
export const useAdminUserById = (userId: string) => {
    const dispatch = useAppDispatch();
    const TOAST_ID = 'admin-user-by-id-toast';

    return useQuery({
        queryKey: ['admin-user', userId],
        queryFn: async () => {
            dispatch(setUserLoading(true));
            dispatch(setUserError(null));
            
            try {
                const response = await getAdminUserById(userId);
                const userData = extractSingleData(response);
                
                // Update Redux store with fetched user data
                dispatch(updateUser({ user: userData }));
                
                toast.success('Admin user info loaded successfully', { id: TOAST_ID });
                return response;
            } catch (error) {
                dispatch(setUserError('Failed to fetch admin user info'));
                toastError(error, TOAST_ID);
                throw error;
            } finally {
                dispatch(setUserLoading(false));
            }
        },
        enabled: !!userId, // Only run if userId is provided
        retry: 2,
        retryDelay: 1000,
    });
};
