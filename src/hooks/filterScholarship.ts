import { fetchPaginatedScholarship } from '@/store/actions/getFilteredScholarship';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { setInitialValue, setLoading } from '@/store/slices/filtersScholarship';
import { useRouter } from 'next/router';
import { useFilterQuery } from './filterQuery';  

export const useSearchedScholarship = () => {
    const state = useAppSelector((state) => state.scholarships);
    const dispatch = useAppDispatch();
    const { query: reduxQuery } = useFilterQuery();  
    const { query: urlQuery } = useRouter();  

    
    const mergedQuery = {
        ...reduxQuery,
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
        ),
    };

    const fetchSearchedScholarshipRequest = (
        nextPage: number = state.paginatorInfo.page ?? 1
    ) => {
        dispatch(
            fetchPaginatedScholarship({
                nextPageParam: nextPage,
                query: mergedQuery  
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
