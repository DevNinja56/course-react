import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterQueryInitialStateType {
    query: { [key: string]: unknown };
}

const initialState: FilterQueryInitialStateType = {
    query: {}
};

const filterQuery = createSlice({
    name: 'filterQuery',
    initialState,
    reducers: {
        addQuery(state, action: PayloadAction<{ [key: string]: unknown }>) {
            state.query = { ...state.query, ...action.payload };
        },
        removeQuery(state, action: PayloadAction<string>) {
            delete state.query[action.payload];
        },
        clearAllQuery(state) {
            state.query = {};
        }
    }
});

export const { addQuery, removeQuery, clearAllQuery } = filterQuery.actions;
export default filterQuery.reducer;
