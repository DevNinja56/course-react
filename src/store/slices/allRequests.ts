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
    specializationType,
    applyTypes,
    geoIpType,
    courseType,
    eventType,
    DisciplineCountType,
    MessageInterface
} from '@/types';

export interface PaginatedResponse<data> {
    data: data;
    count: number;
    page: number;
    limit: number;
    totalPage: number;
    nextPage: number | null;
}

type ApplyId = string | string[] | undefined;

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
        getCoursesByInstitute: builder.query<
            PaginatedResponse<singleCourseType[]>,
            { limit: number; page: number; instituteId: string }
        >({
            query: ({ limit, page, instituteId }) => ({
                url: `${API_ENDPOINTS.COURSE_INSTITUTE_ID}?limit=${limit}&page=${page}&instituteId=${instituteId}`
            }),
            transformResponse: (res: {
                data: PaginatedResponse<singleCourseType[]>;
            }) => res.data! ?? res
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
        }),
        getUserApplies: builder.query<applyTypes[], void>({
            query: () => ({ url: API_ENDPOINTS.APPLY_USER }),
            transformResponse: (res: { data: applyTypes[] }) => res.data! ?? res
        }),
        getUserIp: builder.query<geoIpType, void>({
            query: () => ({ url: API_ENDPOINTS.GEO_IP }),
            transformResponse: (res: { data: geoIpType }) => res.data! ?? res
        }),
        getCourseByFilter: builder.query<
            PaginatedResponse<courseType[]>,
            { limit: number; page: number; body: object[] }
        >({
            query: ({ limit, page, body }) => ({
                url: `${API_ENDPOINTS.COURSE_SEARCH}?limit=${limit}&page=${page}`,
                method: 'POST',
                body: { pipeline: [...body] }
            }),
            transformResponse: (res: {
                data: PaginatedResponse<courseType[]>;
            }) => res.data! ?? res
        }),
        getScholarshipFilter: builder.query<
            PaginatedResponse<scholarshipType[]>,
            { limit: number; page: number; body: object[] }
        >({
            query: ({ limit, page, body }) => ({
                url: `${API_ENDPOINTS.SCHOLARSHIP_SEARCH}?limit=${limit}&page=${page}`,
                method: 'POST',
                body: { pipeline: [...body] }
            }),
            transformResponse: (res: {
                data: PaginatedResponse<scholarshipType[]>;
            }) => res.data! ?? res
        }),

        getApplyById: builder.query<applyTypes, ApplyId>({
            query: (id: string) => ({
                url: API_ENDPOINTS.GET_APPLY_BY_ID.replace(':id', id)
            }),
            transformResponse: (res: { data: applyTypes }) => res.data! ?? res
        }),
        getPaginatedEvents: builder.query<
            PaginatedResponse<eventType[]>,
            { limit: number; page: number }
        >({
            query: ({ limit, page }) => ({
                url: `${API_ENDPOINTS.EVENTS}?limit=${limit}&page=${page}`
            }),
            transformResponse: (res: {
                data: PaginatedResponse<eventType[]>;
            }) => res.data! ?? res
        }),
        getCountDiscipline: builder.query<DisciplineCountType[], void>({
            query: () => ({ url: API_ENDPOINTS.DISCIPLINE_COUNT }),
            transformResponse: (res: { data: DisciplineCountType[] }) =>
                res.data! ?? res
        }),
        getMessages: builder.query<
            PaginatedResponse<MessageInterface[]>,
            { page: number; limit: number; applicationId: string }
        >({
            query: ({ page, limit, applicationId }) => ({
                url: `${API_ENDPOINTS.MESSAGE}?page=${page ?? 1}&limit=${limit ?? 10}&application=${applicationId}`
            }),
            transformResponse: (res: {
                data: PaginatedResponse<MessageInterface[]>;
            }) => res.data! ?? res
        }),
        getCounsellorSchedule: builder.query<
            unknown,
            { id: unknown; date: string }
        >({
            query: ({ id, date }) => ({
                url: `${API_ENDPOINTS.COUNSELLOR}/${id}/${date}`
            }),
            transformResponse: (res: { data: unknown }) => res.data! ?? res
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
    useGetUserFavoritesQuery,
    useGetUserAppliesQuery,
    useGetUserIpQuery,
    useGetCourseByFilterQuery,
    useGetScholarshipFilterQuery,
    useGetApplyByIdQuery,
    useGetCoursesByInstituteQuery,
    useGetPaginatedEventsQuery,
    useGetCountDisciplineQuery,
    useGetMessagesQuery,
    useGetCounsellorScheduleQuery
} = stateQueryApi;
