import { useAppDispatch, useAppSelector } from '@/hooks/store';
import {
    addQuery,
    clearAllQuery,
    removeQuery
} from '@/store/slices/filterQuery';

export const useFilterQuery = () => {
    const dispatch = useAppDispatch();
    const filterQuery = useAppSelector((state) => state.filterQuery);

    const addQueryAction = (obj: { [key: string]: string[] }) => {
        dispatch(addQuery(obj));
    };

    const removeQueryAction = (key: string) => dispatch(removeQuery(key));

    const clearQueryAction = () => {
        dispatch(clearAllQuery());
    };

    return {
        query: filterQuery.query,
        addQuery: addQueryAction,
        removeQuery: removeQueryAction,
        clearALlQuery: clearQueryAction
    };
};
