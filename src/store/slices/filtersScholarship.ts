import { filterScholarShipType, scholarshipFiltersType } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchPaginatedScholarship } from '../actions/getFilteredScholarship';

export interface getAllScholarshipTypes {
    data: filterScholarShipType[];
    filters: scholarshipFiltersType;
    paginatorInfo: {
        count: number;
        page: number;
        limit: number;
        totalPage: number;
    };
    error: string | null;
    isLoading: boolean;
}

const initialState: getAllScholarshipTypes = {
    data: [],
    filters: {
        regions: [],
        countries: [],
        institutes: [],
        degrees: [],
        disciplines: [],
        scholarship_types: []
    },
    paginatorInfo: {
        count: 0,
        page: 1,
        limit: 20,
        totalPage: 1
    },
    error: null,
    isLoading: false
};
const scholarships = createSlice({
    name: 'getAllScholarships',
    initialState,
    reducers: {
        setLoading(state) {
            state.isLoading = true;
        },

        setInitialValue(state) {
            state.data = [];
            state.paginatorInfo = initialState.paginatorInfo;
            state.error = null;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPaginatedScholarship.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPaginatedScholarship.fulfilled, (state, action) => {
                const { data, filters, ...pagination } = action.payload;
                state.data = data;
                state.filters = filters;
                state.paginatorInfo = pagination;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(fetchPaginatedScholarship.rejected, (state, action) => {
                state.error = action.error.message ?? 'An error occurred';
            });
    }
});

export const { setLoading, setInitialValue } = scholarships.actions;

export default scholarships.reducer;
