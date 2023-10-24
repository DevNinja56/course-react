import { courseType } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchPaginatedCourses } from '../actions/getFilteredCourse';

export interface getAllCourseTypes {
    data: courseType[];
    paginatorInfo: {
        count: number;
        page: number;
        limit: number;
        totalPage: number;
    };
    error: string | null;
    isLoading: boolean;
}

const initialState: getAllCourseTypes = {
    data: [],
    paginatorInfo: {
        count: 0,
        page: 1,
        limit: 20,
        totalPage: 1
    },
    error: null,
    isLoading: false
};
const courses = createSlice({
    name: 'getAllCourses',
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
            .addCase(fetchPaginatedCourses.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPaginatedCourses.fulfilled, (state, action) => {
                const { data, ...pagination } = action.payload;
                state.data = data;
                state.paginatorInfo = pagination;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(fetchPaginatedCourses.rejected, (state, action) => {
                state.error = action.error.message ?? 'An error occurred';
            });
    }
});

export const { setLoading, setInitialValue } = courses.actions;

export default courses.reducer;
