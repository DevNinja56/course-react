import { fetchPaginatedCourses } from '@/store/actions/getFilteredCourse';
import { useAppDispatch, useAppSelector } from './store';
import { setInitialValue, setLoading } from '@/store/slices/filtersCourse';

export const useSearchedCourses = () => {
    const state = useAppSelector((state) => state.courses);
    const dispatch = useAppDispatch();

    const fetchSearchedCoursesRequest = (
        nexPage: number = state.paginatorInfo.page ?? 1
    ) => {
        dispatch(fetchPaginatedCourses(nexPage));
    };
    const initialState = () => dispatch(setInitialValue());
    const startLoading = () => dispatch(setLoading());

    return {
        ...state,
        fetchSearchedCoursesRequest,
        initialState,
        startLoading
    };
};
