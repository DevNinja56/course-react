import {
    addQuery,
    removeQuery,
    clearAllQuery,
    toggleQuery
} from '@/store/slices/smartMatch';
import { useAppDispatch, useAppSelector } from './store';

export const useSmartMatchTool = () => {
    const dispatch = useAppDispatch();
    const query = useAppSelector((state) => state.smartMatch.query);
    const isActive = useAppSelector((state) => state.smartMatch.isActive);

    const addQueryAction = (obj: { [key: string]: string | string[] }) => {
        dispatch(addQuery(obj));
    };

    const removeQueryAction = (key: string) => {
        dispatch(removeQuery(key));
    };

    const clearQueryAction = () => {
        dispatch(clearAllQuery());
    };
    const toggleSmartMatch = (e: boolean) => {
        dispatch(toggleQuery(e));
    };

    return {
        query,
        addQuery: addQueryAction,
        removeQuery: removeQueryAction,
        clearAllQuery: clearQueryAction,
        toggleSmartMatch,
        isActive
    };
};
