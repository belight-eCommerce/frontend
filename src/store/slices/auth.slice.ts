import { User } from "@/types/User";
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    refreshToken?: string | null;
    user: User | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { access_token, refresh_token, ...userData } = action.payload;
            const { user } = userData;
            state.isAuthenticated = true;
            state.user = user;
            state.token = access_token;
            state.refreshToken = refresh_token || null;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        },
    },
});

export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectUserId = (state: { auth: AuthState }) => state.auth.user?.id || state.auth.user?._id || null;
export const selectIsAuth = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectToken = (state: { auth: AuthState }) => state.auth.token;
export const selectRefreshToken = (state: { auth: AuthState }) => state.auth.refreshToken;

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

