import { sortState } from '@/components/FilterPage/SortBy';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const formateCourseQuery = (query: { [key: string]: any }) => {
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

    if (query.degreeType) {
        orConditions.push({
            'degree.type': { $in: query.degreeType }
        });
    }

    if (query.discipline) {
        orConditions.push({
            'discipline.name': { $in: query.discipline }
        });
    }

    if (query.specialization) {
        orConditions.push({
            'specialization.name': { $in: query.specialization }
        });
    }

    if (query.institute) {
        orConditions.push({
            'institute.name': { $in: query.institute }
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

export const formateScholarshipQuery = (query: { [key: string]: any }) => {
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

    if (query.countries) {
        orConditions.push({
            'country.name': { $in: query.countries }
        });
    }

    if (query.degrees) {
        orConditions.push({
            'degrees.name': { $in: query.degrees }
        });
    }

    if (query.degreeType) {
        orConditions.push({
            'degrees.type': { $in: query.degreeType }
        });
    }

    if (query.scholarshipType) {
        orConditions.push({
            type: { $in: query.scholarshipType }
        });
    }

    if (query.discipline) {
        orConditions.push({
            'discipline.name': { $in: query.discipline }
        });
    }

    if (query.institute) {
        orConditions.push({
            'institute.name': { $in: query.institute }
        });
    }

    if (orConditions.length > 0) {
        matches.$match.$or = orConditions;
    }

    return query.sortBy ? [matches, sort] : [matches];
};
