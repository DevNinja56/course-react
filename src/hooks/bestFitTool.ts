
import { addQuery, removeQuery, clearAllQuery } from '@/store/slices/bestFitTool';
import { useAppDispatch, useAppSelector } from './store';

export const useBestFitTool = () => {
    const dispatch = useAppDispatch();
    const query = useAppSelector((state) => state.bestFitTool.query);

    const addQueryAction = (obj: { [key: string]: string }) => {
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
