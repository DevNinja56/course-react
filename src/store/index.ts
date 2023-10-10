import { configureStore } from '@reduxjs/toolkit';
import { stateQueryApi } from './slices/allRequests';
import authUserInfo from '@/store/slices/auth.slice';
import uiSlice from './slices/ui.slice';
import courses from './slices/filtersCourse';
import filterQuery from './slices/filterQuery';

export const store = configureStore({
    reducer: {
        [stateQueryApi.reducerPath]: stateQueryApi.reducer,
        auth: authUserInfo,
        userInterface: uiSlice,
        courses,
        filterQuery
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(stateQueryApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
