import { fetchPaginatedScholarship } from '@/store/actions/getFilteredScholarship';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { setInitialValue, setLoading } from '@/store/slices/filtersScholarship';
import { useRouter } from 'next/router';

export const useSearchedScholarship = () => {
    const state = useAppSelector((state) => state.scholarships);
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

    const fetchSearchedScholarshipRequest = (
        nexPage: number = state.paginatorInfo.page ?? 1
    ) => {
        dispatch(
            fetchPaginatedScholarship({
                nextPageParam: nexPage,
                query: updatedQuery
            })
        );
    };
    const initialState = () => dispatch(setInitialValue());
    const startLoading = () => dispatch(setLoading());

    return {
        ...state,
        fetchSearchedScholarshipRequest,
        initialState,
        startLoading
    };
};
