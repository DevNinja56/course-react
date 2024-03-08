/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { produce } from 'immer';

export interface objectType {
    label: string;
    value: string;
}

interface FileDetails {
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
}

interface FileType {
    passportFile: FileDetails[];
    conSolidFile: FileDetails[];
}

interface dataTypes {
    degree: objectType | null;
    course: objectType | null;
    institute: objectType | null;
    intakes: objectType | null;
    files: FileType;
}

const initialState: dataTypes = {
    degree: null,
    course: null,
    institute: null,
    intakes: null,
    files: { passportFile: [], conSolidFile: [] }
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
        },
        addFiles: (
            state,
            action: PayloadAction<{
                type: 'passport' | 'conSolid';
                filesArray: any[];
            }>
        ) => {
            state.files = produce(state.files, (draft) => {
                if (action.payload.type === 'passport') {
                    draft.passportFile.push(...action.payload.filesArray);
                } else if (action.payload.type === 'conSolid') {
                    draft.conSolidFile.push(...action.payload.filesArray);
                } else {
                    console.log('Invalid file type:', action.payload.type);
                }
            });
        },
        removeFile(
            state,
            action: PayloadAction<{
                type: 'passport' | 'conSolid';
                index: number;
            }>
        ) {
            const { type, index } = action.payload;
            if (type === 'passport') {
                state.files.passportFile.splice(index, 1);
            } else if (type === 'conSolid') {
                state.files.conSolidFile.splice(index, 1);
            }
        }
    }
});

export const { addDegree, addCourse, addInstitute, addIntakes, addFiles, removeFile } =
    apply.actions;
export default apply.reducer;
