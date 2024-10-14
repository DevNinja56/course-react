
import { addQuery, removeQuery, clearAllQuery } from '@/store/slices/filterQuery';
import { useAppDispatch, useAppSelector } from './store';

export const useFilterQuery = () => {
    const dispatch = useAppDispatch();
    const query = useAppSelector((state) => state.filterQuery.query);

    const addQueryAction = (obj: { [key: string]: string[] }) => {
        dispatch(addQuery(obj));
    };

    const removeQueryAction = (key: string) => {
        dispatch(removeQuery(key));
    };

    const clearQueryAction = () => {
        dispatch(clearAllQuery());

    };


    return {
        query,
        addQuery: addQueryAction,
        removeQuery: removeQueryAction,
        clearAllQuery: clearQueryAction
    };
};
