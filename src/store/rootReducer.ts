import { combineReducers } from '@reduxjs/toolkit';
import authUserInfo from '@/store/slices/auth.slice';
import uiSlice from '@/store/slices/ui.slice';
import courses from '@/store/slices/filtersCourse';
import scholarships from '@/store/slices/filtersScholarship';
import filterQuery from '@/store/slices/filterQuery';
import compareInstitute from '@/store/slices/compare.slice';
import blogs from '@/store/slices/blogsPaginated';
import smartMatch from '@/store/slices/smartMatch';
import apply from '@/store/slices/apply.slice';
import currency from '@/store/slices/currency.slice';
import { stateQueryApi } from './slices/allRequests';

export const rootReducer = combineReducers({
    [stateQueryApi.reducerPath]: stateQueryApi.reducer,
    auth: authUserInfo,
    userInterface: uiSlice,
    courses,
    scholarships,
    blogs,
    filterQuery,
    compareInstitute,
    apply,
    smartMatch,
    currency
});
