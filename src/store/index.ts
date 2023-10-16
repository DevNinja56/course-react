import { configureStore } from '@reduxjs/toolkit';
import { stateQueryApi } from '@/store/slices/allRequests';
import authUserInfo from '@/store/slices/auth.slice';
import uiSlice from '@/store/slices/ui.slice';
import courses from '@/store/slices/filtersCourse';
import scholarships from '@/store/slices/filtersScholarship';
import filterQuery from '@/store/slices/filterQuery';

export const store = configureStore({
    reducer: {
        [stateQueryApi.reducerPath]: stateQueryApi.reducer,
        auth: authUserInfo,
        userInterface: uiSlice,
        courses,
        scholarships,
        filterQuery
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(stateQueryApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
