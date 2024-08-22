import { fetchPaginatedCourses } from '@/store/actions/getFilteredCourse';
import { useAppDispatch, useAppSelector } from './store';
import { setInitialValue, setLoading } from '@/store/slices/filtersCourse';
import { useRouter } from 'next/router';

export const useSearchedCourses = () => {
    const state = useAppSelector((state) => state.courses);
    const dispatch = useAppDispatch();
    const { query } = useRouter();

    const updatedQuery = Object.entries(query).reduce(
        (acc, [key, value]) => {
            if (Array.isArray(value)) {
                acc[key] = value;
            } else if (typeof value === 'string' && value !== '') {
                acc[key] = [value as string];
            }
            return acc;
        },
        {} as { [key: string]: string[] }
    );

    const fetchSearchedCoursesRequest = (
        nexPage: number = state.paginatorInfo.page ?? 1
    ) => {
        dispatch(
            fetchPaginatedCourses({
                nextPageParam: nexPage,
                query: updatedQuery
            })
        );
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
