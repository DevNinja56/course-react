import { fetchPaginatedBlogs } from '@/store/actions/getBlogs';
import { useAppDispatch, useAppSelector } from './store';
import { setInitialValue, setLoading } from '@/store/slices/filtersCourse';

export const usePaginatedBlogs = () => {
    const state = useAppSelector((state) => state.blogs);
    const dispatch = useAppDispatch();

    const fetchBlogs = (nexPage: number = state.paginatorInfo.page ?? 1) => {
        dispatch(fetchPaginatedBlogs(nexPage));
    };
    const initialState = () => dispatch(setInitialValue());
    const startLoading = () => dispatch(setLoading());

    return {
        ...state,
        fetchBlogs,
        initialState,
        startLoading
    };
};
