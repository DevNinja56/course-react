import { fetchPaginatedCourses } from '@/store/actions/getFilteredCourse';
import { useAppDispatch, useAppSelector } from './store';
import { setInitialValue, setLoading } from '@/store/slices/filtersCourse';
import { useFilterQuery } from './filterQuery';
import { useRouter } from 'next/router';
import { fetchCourseFilters } from '@/store/actions/getCourseFilters';
import { useSmartMatchTool } from './smartMatch';

export const useSearchedCourses = () => {
    const state = useAppSelector((state) => state.courses);
    const dispatch = useAppDispatch();
    const { query: reduxQuery } = useFilterQuery();
    const { query: urlQuery } = useRouter();
    const router = useRouter();

    const { isActive, query: smartQuery } = useSmartMatchTool();
    const mergedQuery = {
        ...reduxQuery,
        ...(!isActive && router.query.SmartMatch && smartQuery),
        ...Object.entries(urlQuery).reduce(
            (acc, [key, value]) => {
                if (Array.isArray(value)) {
                    acc[key] = value;
                } else if (typeof value === 'string' && value !== '') {
                    acc[key] = [value];
                }
                return acc;
            },
            {} as { [key: string]: string[] }
        )
    };

    const fetchSearchedCoursesRequest = (
        nextPage: number = state.paginatorInfo.page ?? 1
    ) => {
        dispatch(
            fetchPaginatedCourses({
                nextPageParam: nextPage,
                query: mergedQuery
            })
        );
        dispatch(
            fetchCourseFilters({
                query: mergedQuery
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
