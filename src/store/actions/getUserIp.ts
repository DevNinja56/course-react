import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import http from '@/utils/axios';

export const fetchUserCountry = createAsyncThunk(
    API_ENDPOINTS.GEO_IP,
    async () => {
        try {
            return http.get(API_ENDPOINTS.GEO_IP);
        } catch (error) {
            throw new Error('Something went wrong');
        }
    }
);
