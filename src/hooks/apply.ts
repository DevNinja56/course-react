import { useAppDispatch, useAppSelector } from '@/hooks/store';
import {
    addDegree,
    addCourse,
    addScholarship,
    objectType
} from '@/store/slices/apply.slice';

export const useApply = () => {
    const state = useAppSelector((state) => state.apply);
    const dispatch = useAppDispatch();

    const addDegreeState = (state: objectType) => dispatch(addDegree(state));
    const addCourseState = (state: objectType) => dispatch(addCourse(state));
    const addScholarshipState = (state: objectType) =>
        dispatch(addScholarship(state));

    return {
        ...state,
        addDegreeState,
        addCourseState,
        addScholarshipState
    };
};
