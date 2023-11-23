import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '@/utils/axios/token';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import {
    blogsType,
    countryType,
    singleCourseType,
    degreeType,
    disciplineType,
    favoritesType,
    instituteType,
    scholarshipType,
    specializationType
} from '@/types';

export interface PaginatedResponse<data> {
    data: data;
    count: number;
    page: number;
    limit: number;
    totalPage: number;
    nextPage: number | null;
}

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
        getCoursesByDegree: builder.query<
            singleCourseType[],
            { degreeId: string }
        >({
            query: ({ degreeId }) => ({
                url: `${API_ENDPOINTS.COURSE_DEGREE_ID}/${degreeId}`
            }),
            transformResponse: (res: { data: singleCourseType[] }) =>
                res.data! ?? res
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
        getSpecialization: builder.query<specializationType[], void>({
            query: () => ({ url: API_ENDPOINTS.SPECIALIZATION }),
            transformResponse: (res: { data: specializationType[] }) =>
                res.data! ?? res
        }),
        getInstitute: builder.query<instituteType[], void>({
            query: () => ({ url: API_ENDPOINTS.INSTITUTE }),
            transformResponse: (res: { data: instituteType[] }) =>
                res.data! ?? res
        }),
        getSingleBlog: builder.query<blogsType, string>({
            query: (id) => ({
                url: API_ENDPOINTS.SINGLE_BLOG.replace(':id', id)
            }),
            transformResponse: (res: { data: blogsType }) => res.data! ?? res
        }),
        getPaginatedDiscipline: builder.query<
            PaginatedResponse<disciplineType[]>,
            { limit: number; page: number }
        >({
            query: ({ limit, page }) => ({
                url: `${API_ENDPOINTS.DISCIPLINE_PAGINATED}?limit=${limit}&page=${page}`
            }),
            transformResponse: (res: {
                data: PaginatedResponse<disciplineType[]>;
            }) => res.data! ?? res
        }),
        getCourseById: builder.query<singleCourseType, string>({
            query: (id) => ({
                url: API_ENDPOINTS.COURSE_BY_ID.replace(':id', id)
            }),
            transformResponse: (res: { data: singleCourseType }) =>
                res.data! ?? res
        }),
        getScholarshipById: builder.query<scholarshipType, string>({
            query: (id) => ({
                url: API_ENDPOINTS.SCHOLARSHIP_BY_ID.replace(':id', id)
            }),
            transformResponse: (res: { data: scholarshipType }) =>
                res.data! ?? res
        }),
        getUserFavorites: builder.query<
            favoritesType[],
            'course' | 'institute' | 'scholarship' | 'blog'
        >({
            query: (type) => ({
                url: API_ENDPOINTS.USER_FAVORITES.replace(':type', type)
            }),
            transformResponse: (res: { data: favoritesType[] }) =>
                res.data! ?? res
        })
    })
});

export const {
    useGetCountriesQuery,
    useGetDegreesQuery,
    useGetDisciplineQuery,
    useGetCoursesByDegreeQuery,
    useGetScholarshipQuery,
    useGetSpecializationQuery,
    useGetInstituteQuery,
    useGetSingleBlogQuery,
    useGetPaginatedDisciplineQuery,
    useGetCourseByIdQuery,
    useGetScholarshipByIdQuery,
    useGetUserFavoritesQuery
} = stateQueryApi;
