import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '@/utils/axios';

export const fetchPaginatedBlogs = createAsyncThunk(
    API_ENDPOINTS.BLOGS,
    async (nextPageParam: number) => {
        try {
            return http
                .get(
                    `${API_ENDPOINTS.BLOGS}?page=${nextPageParam ?? 1}&limit=20`
                )
                .then((res) => res.data);
        } catch (error) {
            return error;
        }
    }
);
