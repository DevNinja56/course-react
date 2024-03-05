/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

export interface objectType {
    label: string;
    value: string;
}

interface dataTypes {
    degree: objectType | null;
    course: objectType | null;
    institute: objectType | null;
    intakes: objectType | null;
}

const initialState: dataTypes = {
    degree: null,
    course: null,
    institute: null,
    intakes: null,
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
        addInstitute(state, action) {
            state.institute = action.payload;
        },
        addIntakes(state, action) {
            state.intakes = action.payload;
        }
    }
});

export const { addDegree, addCourse, addInstitute, addIntakes } = apply.actions;
export default apply.reducer;
