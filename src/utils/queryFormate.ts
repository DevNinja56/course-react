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

    if (query.region) {
        orConditions.push({
            region: { $in: query.region }
        });
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

    if (query.location) {
        orConditions.push({
            'institute.location': { $in: query.location }
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

    if (query.intakes) {
        orConditions.push({
            intakes: {
                $regex: `${query.intakes?.map((set:string)=>set.replaceAll(",","|"))?.join('|')?.toLowerCase()}`,
                $options: 'i'
            }
        });
    }

    if (query.tuitionFee) {
        const { min, max } = JSON.parse(query.tuitionFee[0]) as {
            min: number;
            max: number;
        };

        orConditions.push({
            tuitionFee: { $gte: min, $lte: max }
        });
    }

    if (query.sortBy) {
        const value = query.sortBy as
            | 'A-Z'
            | 'Z-A'
            | 'tuitionFee-Up'
            | 'tuitionFee-Down';

        sort =
            value === ('A-Z' || 'Z-A')
                ? { $sort: { name: sortState[value] } }
                : { $sort: { tuitionFee: sortState[value] } };
    }

    if (orConditions.length > 0) {
        matches.$match.$and = orConditions;
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

    if (query.region) {
        orConditions.push({
            region: { $in: query.region }
        });
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
        matches.$match.$and = orConditions;
    }

    return query.sortBy ? [matches, sort] : [matches];
};
