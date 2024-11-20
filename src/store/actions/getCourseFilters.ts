import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '@/utils/axios';
import { formateCourseQuery } from '@/utils/queryFormate';

export const fetchCourseFilters = createAsyncThunk(
    API_ENDPOINTS.COURSE_FILTERS_SEARCH,
    async ({ query }: { query: { [key: string]: string[] | string } }) => {
        const updatedQueryQuery = formateCourseQuery(query);

        try {
            return http
                .post(
                    `${API_ENDPOINTS.COURSE_FILTERS_SEARCH}`,
                    {
                        pipeline: Object.values(updatedQueryQuery)
                    },
                    {
                        params: {
                            isUpdate: false
                        }
                    }
                )
                .then((res) => res.data);
        } catch (error) {
            return error;
        }
    }
);
