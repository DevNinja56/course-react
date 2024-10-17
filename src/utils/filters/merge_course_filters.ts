/* eslint-disable @typescript-eslint/no-explicit-any */
interface FilterItem {
    region?: string;
    country?: string;
    institute?: string;
    degree?: {
        name: string;
        type: string;
    };
    intakes?: string;
    location?: string;
    specializations?: Specialization[];
    name?: string[];
}

interface CountItem {
    region?: string;
    country?: string;
    institute?: string;
    degree?: {
        name: string;
        type: string;
    };
    intakes?: string;
    location?: string;
    count: number;
    specializations?: SpecializationCount[];
    name?: string[];
}

interface Specialization {
    name: string;
}

interface SpecializationCount extends Specialization {
    count: number;
}

interface Response {
    regions: FilterItem[];
    regions_count: CountItem[];
    countries: FilterItem[];
    countries_count: CountItem[];
    institutes: FilterItem[];
    institutes_count: CountItem[];
    degrees: FilterItem[];
    degrees_count: CountItem[];
    disciplines: FilterItem[];
    disciplines_count: CountItem[];
    intakes: FilterItem[];
    intakes_count: CountItem[];
    locations: FilterItem[];
    locations_count: CountItem[];
}

export const mergeCourseFilter = (response: Response) => {
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
                    // Match nested objects based on specific properties (like "_id" or "name")
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
        response.countries,
        response.countries_count,
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

    // Example usage for intakes
    const mergedIntakes = mergeFiltersWithCounts(
        response.intakes,
        response.intakes_count,
        'intakes'
    );

    // Example usage for locations
    const mergedLocations = mergeFiltersWithCounts(
        response.locations,
        response.locations_count,
        'location'
    );

    // Merging disciplines with counts and specializations separately
    const mergedDisciplines = response.disciplines.map((discipline) => {
        const match = response.disciplines_count.find(
            (countItem) => countItem.name?.[0] === discipline.name?.[0]
        );

        // Map the specializations with their counts
        const specializations = (discipline.specializations || []).map(
            (spec) => {
                const matchedSpec = match
                    ? match.specializations?.find((s) => s.name === spec.name)
                    : null;
                return {
                    ...spec,
                    count: matchedSpec ? matchedSpec.count : 0
                };
            }
        );

        return {
            ...discipline,
            count: match ? match.count : 0,
            specializations
        };
    });

    // Final merged result
    return {
        regions: mergedRegions,
        countries: mergedCountries,
        institutes: mergedInstitutes,
        degrees: mergedDegrees,
        disciplines: mergedDisciplines,
        intakes: mergedIntakes,
        locations: mergedLocations
    };
};
