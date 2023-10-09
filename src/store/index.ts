import { configureStore } from '@reduxjs/toolkit';
import authUserInfo from '@/store/slices/auth.slice';
import uiSlice from './slices/ui.slice';
import { stateQueryApi } from './slices/allRequests';

export const store = configureStore({
    reducer: {
        [stateQueryApi.reducerPath]: stateQueryApi.reducer,
        auth: authUserInfo,
        userInterface: uiSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(stateQueryApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
