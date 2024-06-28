import { useRouter } from 'next/router';

export const useFilterQuery = () => {
    const { query, push, pathname } = useRouter();
    // const dispatch = useAppDispatch();
    // const filterQuery = useAppSelector((state) => state.filterQuery);

    const addQueryAction = (obj: { [key: string]: string[] }) => {
        // dispatch(addQuery(obj));
        const newQuery = { ...query, ...obj };
        push({ pathname, query: newQuery });
    };

    const removeQueryAction = (key: string) => {
        // dispatch(removeQuery(key));
        const newQuery = { ...query };
        delete newQuery[key];
        push({ pathname, query: newQuery });
    };

    const clearQueryAction = () => {
        // dispatch(clearAllQuery());
        push({ pathname, query: {} });
    };

    return {
        query: query as { [key: string]: string | string[] },
        addQuery: addQueryAction,
        removeQuery: removeQueryAction,
        clearALlQuery: clearQueryAction
    };
};
