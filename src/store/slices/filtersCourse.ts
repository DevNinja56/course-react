import { courseType, filterCourseType } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchPaginatedCourses } from '../actions/getFilteredCourse';
import { fetchCourseFilters } from '../actions/getCourseFilters';
import { mergeCourseFilter } from '@/utils/filters/merge_course_filters';

export interface getAllCourseTypes {
    data: courseType[];
    filters: filterCourseType;
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
    filters: {
        regions: [],
        countries: [],
        institutes: [],
        disciplines: [],
        intakes: [],
        degrees: [],
        locations: []
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
            })
            .addCase(fetchCourseFilters.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCourseFilters.fulfilled, (state, action) => {
                const filters = mergeCourseFilter(action.payload) as unknown as filterCourseType;
                state.filters = filters;
            })
            .addCase(fetchCourseFilters.rejected, (state, action) => {
                state.error = action.error.message ?? 'An error occurred';
            });
    }
});

export const { setLoading, setInitialValue } = courses.actions;

export default courses.reducer;
