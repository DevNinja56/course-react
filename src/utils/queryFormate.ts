import { sortState } from '@/components/FilterPage/SortBy';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const formateWithQuery = (query: { [key: string]: any }) => {
    const matches: any = {
        $match: {}
    };
    let sort: any;

    const orConditions = [];

    if (query.searchFilter) {
        orConditions.push(
            {
                name: {
                    $regex: query.searchFilter[0],
                    $options: 'i'
                }
            },
            {
                'instituteId.name': {
                    $regex: query.searchFilter[0],
                    $options: 'i'
                }
            }
        );
    }

    if (query.degrees) {
        orConditions.push({
            'degree.name': { $in: query.degrees }
        });
    }

    if (query.countries) {
        orConditions.push({
            'country.name': { $in: query.countries }
        });
    }

    if (query.scholarship) {
        orConditions.push({
            'scholarshipId.name': { $in: query.scholarship }
        });
    }

    if (query.degreeType) {
        orConditions.push({
            'degreeType.name': { $in: query.degreeType }
        });
    }

    if (query.sortBy) {
        const value = query.sortBy as
            | 'A-Z'
            | 'Z-A'
            | 'Duration-Up'
            | 'Duration-Down';

        sort =
            value === ('A-Z' || 'Z-A')
                ? { $sort: { name: sortState[value] } }
                : { $sort: { duration: sortState[value] } };
    }

    if (orConditions.length > 0) {
        matches.$match.$or = orConditions;
    }

    return query.sortBy ? [matches, sort] : [matches];
};
