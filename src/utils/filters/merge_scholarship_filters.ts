/* eslint-disable @typescript-eslint/no-explicit-any */
interface FilterItem {
    region?: string;
    country?: string;
    institute?: string;
    degree?: {
        name: string;
        type: string;
    };
    type?: string;
}

interface CountItem {
    region?: string;
    country?: string;
    institute?: string;
    degree?: {
        name: string;
        type: string;
    };
    type?: string;
    count: number;
}

interface Response {
    regions: FilterItem[];
    regions_count: CountItem[];
    degrees: FilterItem[];
    degrees_count: CountItem[];
    country: FilterItem[];
    country_count: CountItem[];
    institutes: FilterItem[];
    institutes_count: CountItem[];
    types: FilterItem[];
    types_count: CountItem[];
}

export const mergeDataFilters = (response: Response) => {
    function mergeFiltersWithCounts(
        filters: FilterItem[],
        counts: CountItem[],
        key: keyof FilterItem
    ): (FilterItem & { count: number })[] {
        return filters.map((filterItem) => {
            // Find matching count for the current filter item
            const match = counts.find((countItem) => {
                if (
                    typeof filterItem[key] === 'object' &&
                    filterItem[key] !== null
                ) {
                    // Match nested objects based on specific properties (like "name" or "type")
                    return (
                        countItem[key] &&
                        (countItem[key] as any).name ===
                            (filterItem[key] as any).name
                    );
                }
                return countItem[key] === filterItem[key];
            });

            // Return the merged object with the count or default to zero
            return {
                ...filterItem,
                count: match ? match.count : 0
            };
        });
    }

    // Example usage for regions
    const mergedRegions = mergeFiltersWithCounts(
        response.regions,
        response.regions_count,
        'region'
    );

    // Example usage for countries
    const mergedCountries = mergeFiltersWithCounts(
        response.country,
        response.country_count,
        'country'
    );

    // Example usage for institutes
    const mergedInstitutes = mergeFiltersWithCounts(
        response.institutes,
        response.institutes_count,
        'institute'
    );

    // Example usage for degrees
    const mergedDegrees = mergeFiltersWithCounts(
        response.degrees,
        response.degrees_count,
        'degree'
    );

    // Example usage for types
    const mergedTypes = mergeFiltersWithCounts(
        response.types,
        response.types_count,
        'type'
    );

    // Final merged result
    return {
        regions: mergedRegions,
        countries: mergedCountries,
        institutes: mergedInstitutes,
        degrees: mergedDegrees,
        types: mergedTypes
    };
};
