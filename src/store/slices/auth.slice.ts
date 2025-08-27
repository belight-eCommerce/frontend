import { User } from "@/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum UserRole {
    ADMIN = "admin",
    SELLER = "seller",
    BUYER = "buyer"
}

export interface UserPermissions {
    canAccessAdmin: boolean;
    canAccessSeller: boolean;
    canAccessBuyer: boolean;
}

export interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    refreshToken: string | null;
    user: User | null;
    role: UserRole | null;
    permissions: UserPermissions;
    // Loading states
    isLoading: boolean;
    isUserLoading: boolean;
    // Error states
    error: string | null;
    userError: string | null;
}

const getDefaultPermissions = (role: UserRole | null): UserPermissions => {
    switch (role) {
        case UserRole.ADMIN:
            return {
                canAccessAdmin: true,
                canAccessSeller: true,
                canAccessBuyer: true
            };
        case UserRole.SELLER:
            return {
                canAccessAdmin: false,
                canAccessSeller: true,
                canAccessBuyer: false
            };
        case UserRole.BUYER:
            return {
                canAccessAdmin: false,
                canAccessSeller: false,
                canAccessBuyer: true
            };
        default:
            return {
                canAccessAdmin: false,
                canAccessSeller: false,
                canAccessBuyer: false
            };
    }
};

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
    refreshToken: null,
    user: null,
    role: null,
    permissions: getDefaultPermissions(null),
    isLoading: false,
    isUserLoading: false,
    error: null,
    userError: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{
                access_token: string;
                refresh_token?: string;
                user: User;
                role: UserRole;
            }>
        ) => {
            const { access_token, refresh_token, user, role } = action.payload;
            state.token = access_token;
            state.refreshToken = refresh_token || null;
            state.user = user;
            state.role = role;
            state.isAuthenticated = true;
            state.permissions = getDefaultPermissions(role);
            state.isLoading = false;
            state.error = null;
        },
        updateUser: (state, action: PayloadAction<{ user: User }>) => {
            state.user = action.payload.user;
            state.isUserLoading = false;
            state.userError = null;
        },
        updateRole: (state, action: PayloadAction<{ role: UserRole }>) => {
            state.role = action.payload.role;
            state.permissions = getDefaultPermissions(action.payload.role);
        },
        // Loading states
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setUserLoading: (state, action: PayloadAction<boolean>) => {
            state.isUserLoading = action.payload;
        },
        // Error states
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        setUserError: (state, action: PayloadAction<string | null>) => {
            state.userError = action.payload;
            state.isUserLoading = false;
        },
        clearErrors: (state) => {
            state.error = null;
            state.userError = null;
        },
        logout: () => {
            return {
                ...initialState
            };
        },
    },
});

// Selectors
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectUserId = (state: { auth: AuthState }) => state.auth.user?.id || state.auth.user?._id || null;
export const selectIsAuth = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectToken = (state: { auth: AuthState }) => state.auth.token;
export const selectRefreshToken = (state: { auth: AuthState }) => state.auth.refreshToken;
export const selectRole = (state: { auth: AuthState }) => state.auth.role;
export const selectPermissions = (state: { auth: AuthState }) => state.auth.permissions;

// Loading selectors
export const selectIsLoading = (state: { auth: AuthState }) => state.auth.isLoading;
export const selectIsUserLoading = (state: { auth: AuthState }) => state.auth.isUserLoading;

// Error selectors
export const selectError = (state: { auth: AuthState }) => state.auth.error;
export const selectUserError = (state: { auth: AuthState }) => state.auth.userError;

// Route access selectors
export const selectCanAccessAdmin = (state: { auth: AuthState }) => state.auth.permissions.canAccessAdmin;
export const selectCanAccessSeller = (state: { auth: AuthState }) => state.auth.permissions.canAccessSeller;
export const selectCanAccessBuyer = (state: { auth: AuthState }) => state.auth.permissions.canAccessBuyer;

export const { 
    setCredentials, 
    updateUser, 
    updateRole, 
    setLoading, 
    setUserLoading, 
    setError, 
    setUserError, 
    clearErrors, 
    logout 
} = authSlice.actions;
export default authSlice.reducer;