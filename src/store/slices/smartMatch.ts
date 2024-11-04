import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface smartMatchType {
    query: { [key: string]: string | string[] };
}
const initialState: smartMatchType = {
    query: {}
};

const smartMatch = createSlice({
    name: 'smartMatch',
    initialState,
    reducers: {
        addQuery(state, action: PayloadAction<{ [key: string]: string | string[] }>) {
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

export const { addQuery, removeQuery, clearAllQuery } = smartMatch.actions;
export default smartMatch.reducer;
