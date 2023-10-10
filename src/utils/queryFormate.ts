/* eslint-disable @typescript-eslint/no-explicit-any */
export const formateWithQuery = (arg: { [key: string]: any }) => {
    let query = arg;
    if (query.degrees) {
        query = {
            ...query,
            degreeType: { $in: query.degrees }
        };
        delete query.degrees;
    }

    if (query.countries) {
        query = {
            ...query,
            countries: { $in: query.countries }
        };
    }

    return query;
};
