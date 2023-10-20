import { blogsType } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchPaginatedBlogs } from '../actions/getBlogs';

export interface getAllBlogsTypes {
    data: blogsType[];
    paginatorInfo: {
        count: number;
        page: number;
        limit: number;
        totalPage: number;
        nextPage: number | null;
    };
    error: string | null;
    isLoading: boolean;
}

const initialState: getAllBlogsTypes = {
    data: [],
    paginatorInfo: {
        count: 0,
        page: 1,
        limit: 20,
        totalPage: 1,
        nextPage: null
    },
    error: null,
    isLoading: false
};
const blogs = createSlice({
    name: 'getAllBlogs',
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
            .addCase(fetchPaginatedBlogs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPaginatedBlogs.fulfilled, (state, action) => {
                const { data, ...pagination } = action.payload;
                state.data = data;
                state.paginatorInfo = pagination;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(fetchPaginatedBlogs.rejected, (state, action) => {
                state.error = action.error.message ?? 'An error occurred';
            });
    }
});

export const { setLoading, setInitialValue } = blogs.actions;

export default blogs.reducer;
