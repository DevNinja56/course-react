/* eslint-disable @typescript-eslint/no-explicit-any */
export const formateWithQuery = (query: { [key: string]: any }) => {
    let matches = { $match: {} };

    if (query.degrees) {
        matches = {
            $match: {
                ...matches.$match,
                'degreeType.name': { $in: query.degrees }
            }
        };
    }

    if (query.countries) {
        matches = {
            $match: {
                ...matches.$match,
                'country.name': { $in: query.countries }
            }
        };
    }

    if (query.scholarship) {
        matches = {
            $match: {
                ...matches.$match,
                'scholarshipId.name': { $in: query.scholarship }
            }
        };
    }

    return [matches];
};
