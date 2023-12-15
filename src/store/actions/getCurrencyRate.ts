import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { RootState } from '..';
import http from '@/utils/axios';

export const fetchLatestRate = createAsyncThunk(
    'Fetch Rate From API',
    async (_, { getState }) => {
        try {
            const currentState = getState() as RootState;
            const currentDate = new Date();
            const formattedCurrentDate = currentDate
                .toISOString()
                .split('T')[0];
            const prevDay = new Date();
            prevDay.setDate(currentDate.getDate() - 1);
            const formattedPrevDay = prevDay.toISOString().split('T')[0];
            return http.get(
                API_ENDPOINTS.FETCH_RATES.replace(
                    '${code}',
                    currentState.currency.base_code
                )
                    .replace('${pDate}', formattedPrevDay)
                    .replace('${cDate}', formattedCurrentDate)
            );
        } catch (error) {
            throw new Error('Something went wrong');
        }
    }
);
