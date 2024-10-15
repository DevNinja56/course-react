import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface bestFitToolStateType {
    query: { [key: string]: string };
}

const initialState: bestFitToolStateType = {
    query: {}
};

const bestFitTool = createSlice({
    name: 'bestFitTool',
    initialState,
    reducers: {
        addQuery(state, action: PayloadAction<{ [key: string]: string }>) {
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

export const { addQuery, removeQuery, clearAllQuery } = bestFitTool.actions;
export default bestFitTool.reducer;
