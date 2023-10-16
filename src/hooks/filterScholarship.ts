import { fetchPaginatedScholarship } from '@/store/actions/getFilteredScholarship';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { setInitialValue, setLoading } from '@/store/slices/filtersScholarship';

export const useSearchedScholarship = () => {
    const state = useAppSelector((state) => state.scholarships);
    const dispatch = useAppDispatch();

    const fetchSearchedScholarshipRequest = (
        nexPage: number = state.paginatorInfo.page ?? 1
    ) => {
        dispatch(fetchPaginatedScholarship(nexPage));
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
