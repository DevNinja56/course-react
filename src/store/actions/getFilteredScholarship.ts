import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/store/index';
import http from '@/utils/axios';
import { formateScholarshipQuery } from '@/utils/queryFormate';

export const fetchPaginatedScholarship = createAsyncThunk(
    API_ENDPOINTS.SCHOLARSHIP_SEARCH,
    async (nextPageParam: number, { getState }) => {
        const state = getState() as RootState;

        try {
            return http
                .post(
                    `${API_ENDPOINTS.SCHOLARSHIP_SEARCH}`,
                    {
                        pipeline: Object.values(
                            formateScholarshipQuery(state.filterQuery.query)
                        )
                    },
                    {
                        params: {
                            limit: 20,
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
