import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '@/utils/axios/token';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import {
    countryType,
    degreeLevelType,
    degreeType,
    disciplineType,
    scholarshipType
} from '@/types';

export const stateQueryApi = createApi({
    reducerPath: 'stateQuery',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
        prepareHeaders: (headers) => {
            const token = getToken();
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCountries: builder.query<countryType[], void>({
            query: () => ({ url: API_ENDPOINTS.COUNTRY }),
            transformResponse: (res: { data: countryType[] }) =>
                res.data! ?? res
        }),
        getDegrees: builder.query<degreeType[], void>({
            query: () => ({ url: API_ENDPOINTS.DEGREE }),
            transformResponse: (res: { data: degreeType[] }) => res.data! ?? res
        }),
        getDiscipline: builder.query<disciplineType[], void>({
            query: () => ({ url: API_ENDPOINTS.DISCIPLINE }),
            transformResponse: (res: { data: disciplineType[] }) =>
                res.data! ?? res
        }),
        getScholarship: builder.query<scholarshipType[], void>({
            query: () => ({ url: API_ENDPOINTS.SCHOLARSHIP }),
            transformResponse: (res: { data: scholarshipType[] }) =>
                res.data! ?? res
        }),
        getDegreeTypes: builder.query<degreeLevelType[], void>({
            query: () => ({ url: API_ENDPOINTS.DEGREE_TYPE }),
            transformResponse: (res: { data: degreeLevelType[] }) =>
                res.data! ?? res
        })
    })
});

export const {
    useGetCountriesQuery,
    useGetDegreesQuery,
    useGetDisciplineQuery,
    useGetScholarshipQuery,
    useGetDegreeTypesQuery
} = stateQueryApi;
