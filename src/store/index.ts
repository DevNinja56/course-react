import { configureStore } from '@reduxjs/toolkit';
import { stateQueryApi } from '@/store/slices/allRequests';
import authUserInfo from '@/store/slices/auth.slice';
import uiSlice from '@/store/slices/ui.slice';
import courses from '@/store/slices/filtersCourse';
import scholarships from '@/store/slices/filtersScholarship';
import filterQuery from '@/store/slices/filterQuery';
import compareInstitute from '@/store/slices/compare.slice';
import blogs from '@/store/slices/blogsPaginated';
import apply from '@/store/slices/apply.slice';
import currency from '@/store/slices/currency.slice';

export const store = configureStore({
    reducer: {
        [stateQueryApi.reducerPath]: stateQueryApi.reducer,
        auth: authUserInfo,
        userInterface: uiSlice,
        courses,
        scholarships,
        blogs,
        filterQuery,
        compareInstitute,
        apply,
        currency
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(stateQueryApi.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
