import { useRouter } from "next/navigation";
import { useMutation } from '@tanstack/react-query';
import { toast } from "sonner";
import { toastError } from "@/lib/toastError";
import { useAppDispatch } from "@/store/store";
import { setCredentials, UserRole, setLoading, setError } from "@/store/slices/auth.slice";
import { AdminSignInSchema } from "@/components/auth/AdminSignInForm";
import { adminLogin, adminLogout } from "@/api/admin";
import { useAdminProfile } from "./useAdminUser";

// Flag to switch between mock and real API
const USE_MOCK_DATA = false; // Set to false to use real API

// Mock admin user data for development
const mockAdminUser = {
    _id: "admin_user_id",
    id: "admin_user_id",
    email: "admin@maalifu.com",
    firstName: "Admin",
    lastName: "User",
    phoneNumber: "+251912345678",
    role: "admin",
    status: "active" as const,
    address: "Addis Ababa, Ethiopia",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastLogin: new Date(),
    isSuperAdmin: true
};

// Mock admin credentials for testing
const mockAdminCredentials = {
    email: "admin@maalifu.com",
    password: "admin123"
};

// Mock API function for admin login
const mockAdminLogin = async (credentials: AdminSignInSchema) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate authentication check
    if (credentials.email === mockAdminCredentials.email && 
        credentials.password === mockAdminCredentials.password) {
        return {
            data: {
                access_token: "mock_admin_access_token_" + Date.now(),
                refresh_token: "mock_admin_refresh_token_" + Date.now(),
                user: mockAdminUser,
                role: "admin"
            }
        };
    } else {
        throw new Error("Invalid email or password");
    }
};

export const useAdminLogin = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const TOAST_ID = 'admin-login-toast';
    const { refetch: fetchAdminProfile } = useAdminProfile();

    return useMutation({
        mutationFn: async (credentials: AdminSignInSchema) => {
            dispatch(setLoading(true));
            dispatch(setError(null));
            
            if (USE_MOCK_DATA) {
                // Use mock data for development
                return await mockAdminLogin(credentials);
            } else {
                // Use real API call
                const response = await adminLogin(credentials);
                return response;
            }
        },
        onSuccess: async (data) => {
            toast.success('Admin login successful!', { id: TOAST_ID, duration: 3000 });
            
            // Store basic credentials in Redux
            dispatch(setCredentials({
                access_token: data.data.access_token,
                refresh_token: data.data.refresh_token,
                user: data.data.user,
                role: UserRole.ADMIN
            }));
            
            // If using real API, fetch complete user profile
            if (!USE_MOCK_DATA) {
                try {
                    // Fetch complete admin profile using the access token
                    await fetchAdminProfile();
                } catch (error) {
                    console.warn('Failed to fetch complete admin profile:', error);
                    // Continue with basic user data from login response
                }
            }
            
            // Redirect to admin dashboard
            router.push('/admin');
        },
        onError: (error) => {
            dispatch(setError('Login failed'));
            toastError(error, TOAST_ID);
        },
    });
};

// Hook for admin logout
export const useAdminLogout = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const TOAST_ID = 'admin-logout-toast';

    return useMutation({
        mutationFn: async () => {
            if (USE_MOCK_DATA) {
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 500));
                return { success: true };
            } else {
                // Use real API call
                const response = await adminLogout();
                return response;
            }
        },
        onSuccess: () => {
            toast.success('Logged out successfully', { id: TOAST_ID });
            
            // Clear admin credentials from Redux
            dispatch({ type: 'auth/logout' });
            
            // Redirect to admin login
            router.push('/admin/auth/signin');
        },
        onError: (error) => {
            toastError(error, TOAST_ID);
        },
    });
};
