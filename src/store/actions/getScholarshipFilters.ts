import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '@/utils/axios';
import { formateScholarshipQuery } from '@/utils/queryFormate';

export const fetchScholarshipFilters = createAsyncThunk(
    API_ENDPOINTS.SCHOLARSHIP_FILTERS_SEARCH,
    async ({ query }: { query: { [key: string]: string[] } }) => {
        try {
            return http
                .post(`${API_ENDPOINTS.SCHOLARSHIP_FILTERS_SEARCH}`, {
                    pipeline: Object.values(formateScholarshipQuery(query))
                })
                .then((res) => res.data);
        } catch (error) {
            return error;
        }
    }
);
