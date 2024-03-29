import { useAppDispatch, useAppSelector } from '@/hooks/store';
import {
    addDegree,
    addCourse,
    addInstitute,
    addIntakes,
    objectType
} from '@/store/slices/apply.slice';

export const useApply = () => {
    const state = useAppSelector((state) => state.apply);
    const dispatch = useAppDispatch();

    const addDegreeState = (state: objectType) => dispatch(addDegree(state));
    const addCourseState = (state: objectType) => dispatch(addCourse(state));
    const addInstituteState = (state: objectType) =>
        dispatch(addInstitute(state));
    const addIntakesState = (state: objectType) =>
        dispatch(addIntakes(state));

    return {
        ...state,
        addDegreeState,
        addCourseState,
        addInstituteState,
        addIntakesState
    };
};
