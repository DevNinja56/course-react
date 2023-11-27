/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

export interface objectType {
    label: string;
    value: string;
}

interface dataTypes {
    degree: objectType | null;
    course: objectType | null;
    scholarship: objectType | null;
}

const initialState: dataTypes = {
    degree: null,
    course: null,
    scholarship: null
};

const apply = createSlice({
    name: 'apply',
    initialState,
    reducers: {
        addDegree(state, action) {
            state.degree = action.payload;
        },
        addCourse(state, action) {
            state.course = action.payload;
        },
        addScholarship(state, action) {
            state.scholarship = action.payload;
        }
    }
});

export const { addDegree, addCourse, addScholarship } = apply.actions;
export default apply.reducer;
