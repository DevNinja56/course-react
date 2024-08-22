import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/store/index';
import http from '@/utils/axios';
import { formateCourseQuery } from '@/utils/queryFormate';

export const fetchPaginatedCourses = createAsyncThunk(
    API_ENDPOINTS.COURSE_SEARCH,
    async (
        {
            nextPageParam,
            query
        }: {
            nextPageParam: number | null;
            query: { [key: string]: string[] };
        },
        { getState }
    ) => {
        const state = getState() as RootState;
        const updatedQueryQuery = formateCourseQuery(query);

        try {
            return http
                .post(
                    `${API_ENDPOINTS.COURSE_SEARCH}`,
                    {
                        pipeline: Object.values(updatedQueryQuery)
                    },
                    {
                        params: {
                            limit: 21,
                            page:
                                nextPageParam! ??
                                state.courses?.paginatorInfo?.page ??
                                1
                        }
                    }
                )
                .then((res) => res.data);
        } catch (error) {
            return error;
        }
    }
);
