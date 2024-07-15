import { useRouter } from 'next/router';

export const useFilterQuery = () => {
    const { query, push } = useRouter();
    // const dispatch = useAppDispatch();
    // const filterQuery = useAppSelector((state) => state.filterQuery);

    const addQueryAction = (obj: { [key: string]: string[] }) => {
        // dispatch(addQuery(obj));
        const newQuery = { ...query, ...obj };
        push({ query: newQuery });
    };

    const removeQueryAction = (key: string) => {
        // dispatch(removeQuery(key));
        const newQuery = { ...query };
        delete newQuery[key];
        push({ query: newQuery });
    };

    const clearQueryAction = () => {
        // dispatch(clearAllQuery());
        push({ query: {} });
    };

    return {
        query: query as { [key: string]: string | string[] },
        addQuery: addQueryAction,
        removeQuery: removeQueryAction,
        clearALlQuery: clearQueryAction
    };
};
