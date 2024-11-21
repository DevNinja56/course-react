import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface smartMatchType {
    query: { [key: string]: string | string[] };
    isActive: boolean;
}
const initialState: smartMatchType = {
    query: {},
    isActive: false
};

const smartMatch = createSlice({
    name: 'smartMatch',
    initialState,
    reducers: {
        addQuery(
            state,
            action: PayloadAction<{ [key: string]: string | string[] }>
        ) {
            state.query = { ...state.query, ...action.payload };
        },
        removeQuery(state, action: PayloadAction<string>) {
            delete state.query[action.payload];
        },
        clearAllQuery(state) {
            state.query = {};
        },
        toggleQuery(state, action) {
            state.isActive = action.payload;
        }
    }
});

export const { addQuery, removeQuery, clearAllQuery, toggleQuery } =
    smartMatch.actions;
export default smartMatch.reducer;
