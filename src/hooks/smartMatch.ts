import {
    addQuery,
    removeQuery,
    clearAllQuery
} from '@/store/slices/smartMatch';
import { useAppDispatch, useAppSelector } from './store';

export const useSmartMatchTool = () => {
    const dispatch = useAppDispatch();
    const query = useAppSelector((state) => state.smartMatch.query);

    const addQueryAction = (obj: { [key: string]: string | string[] }) => {
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
