import {
    countryType,
    courseType,
    degreeType,
    disciplineType,
    instituteType
} from '@/types';
import { createSlice } from '@reduxjs/toolkit';

interface dataTypes {
    country: countryType;
    institute: instituteType;
    discipline: disciplineType;
    degreeLevel: degreeType;
    course: courseType;
}

export interface compareInstituteInitialStateType {
    first: dataTypes | null;
    second: dataTypes | null;
    third: dataTypes | null;
}

const initialState: compareInstituteInitialStateType = {
    first: null,
    second: null,
    third: null
};

const compareInstitute = createSlice({
    name: 'compareInstitute',
    initialState,
    reducers: {
        addFirst(state, action) {
            state.first = action.payload;
        },
        addSecond(state, action) {
            state.first = action.payload;
        },
        addThird(state, action) {
            state.first = action.payload;
        }
    }
});

export const { addFirst, addSecond, addThird } = compareInstitute.actions;
export default compareInstitute.reducer;
