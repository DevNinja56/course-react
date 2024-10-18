import React, { useState } from 'react';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterBoxCheck';
import { BiChevronRight } from 'react-icons/bi';
import { useFilterQuery } from '@/hooks/filterQuery';
import * as _ from 'lodash';
import { degreeType } from '@/types';

interface propsType {
    data: {
        degree: degreeType;
        count: number;
    }[];
    isLoading: boolean;
}

const DegreeLevelFilter: React.FC<propsType> = ({ data, isLoading }) => {
    // const { data, isLoading } = useGetDegreesQuery();
    const [open, setOpen] = useState<number | null>(0);
    const { query } = useFilterQuery();

    return (
        <div className="flex flex-col gap-y-3">
            {isLoading ? (
                <FilterCheckBoxLoader />
            ) : (
                Object.entries(
                    _.groupBy(
                        data
                            .filter(({ degree }) => degree)
                            .map(({ degree, count }) => ({ ...degree, count })),
                        'type'
                    )
                )?.map(([name, type], i) => {
                    return (
                        !!name &&
                        name !== 'undefined' && (
                            <div
                                className="flex flex-col "
                                key={'country--list--' + name}
                            >
                                <div className="relative flex w-full justify-around items-center">
                                    <FilterCheckBox
                                        key={'country--list--' + i}
                                        id={name + '--' + i}
                                        text={name ?? 'No Degree'}
                                        value={name}
                                        name={'degreeType'}
                                        count={type[0].count}
                                    />
                                    <span className="mx-2">
                                        <BiChevronRight
                                            onClick={() =>
                                                setOpen((prev) =>
                                                    prev === i ? null : i
                                                )
                                            }
                                            className={`text-grayColor transition-all text-2xl cursor-pointer ${
                                                query['degreeType']?.includes(
                                                    name ?? 'No Degree'
                                                ) || i === open
                                                    ? 'rotate-[-90deg]'
                                                    : 'rotate-[90deg]'
                                            }`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`px-5 overflow-hidden transition-all ${
                                        query['degreeType']?.includes(name) ||
                                        open === i
                                            ? 'max-h-[300px]'
                                            : 'max-h-0'
                                    } `}
                                >
                                    {type.map((degree) => (
                                        <FilterCheckBox
                                            key={
                                                'degree-type--list--' +
                                                degree?.id
                                            }
                                            id={degree?.name ?? 'No Degree'}
                                            text={degree?.name ?? 'No Degree'}
                                            name={'degrees'}
                                            value={degree?.name ?? 'No Degree'}
                                        />
                                    ))}
                                </div>
                            </div>
                        )
                    );
                })
            )}
        </div>
    );
};

export default DegreeLevelFilter;
