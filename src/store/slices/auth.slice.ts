import { verifyUser } from '@/store/actions/verify-user';
import { userType } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export interface authStateType {
    user: userType;
    isAuthenticated: boolean | null;
    isLoading: boolean;
    error: string | null;
}

export const initialState: authStateType = {
    user: {
        name: '',
        email: '',
        gender: '',
        avatar: '',
        address: '',
        instituteLink: '',
        phone_number: '',
        createdAt: '',
        updatedAt: '',
        id: '',
        fbUserId: '',
        role: 'user',
        status: 'in-active',
        registerWith: 'email',
        academicInformation: null,
        documents: []
    },
    isAuthenticated: false,
    isLoading: false,
    error: null
};

const authUserInfo = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = null;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
        loggedIn: (state) => {
            state.isAuthenticated = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(verifyUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(verifyUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.data;
                state.error = null;
            })
            .addCase(verifyUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.error = action.error.message ?? 'An error occurred';
            });
    }
});

export const { updateUser, logout, loggedIn } = authUserInfo.actions;
export default authUserInfo.reducer;
