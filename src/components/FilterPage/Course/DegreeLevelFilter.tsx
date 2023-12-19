import { useGetDegreesQuery } from '@/store/slices/allRequests';
import React, { useState } from 'react';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterCheckBOx';
import { BiChevronRight } from 'react-icons/bi';
import { useFilterQuery } from '@/hooks/filterQuery';
import * as _ from 'lodash';

const DegreeLevelFilter = () => {
    const { data, isLoading } = useGetDegreesQuery();
    const [open, setOpen] = useState<number | null>(0);
    const { query } = useFilterQuery();

    return (
        <div className="flex flex-col gap-y-3">
            <h1 className="text-lg text-darkGrayColor font-medium px-4">
                Degree Level
            </h1>
            {isLoading ? (
                <FilterCheckBoxLoader />
            ) : (
                Object.entries(_.groupBy(data, 'type'))?.map(
                    ([name, type], i) => (
                        <div
                            className="flex flex-col "
                            key={'country--list--' + name}
                        >
                            <div className="relative flex w-full justify-around items-center">
                                <FilterCheckBox
                                    key={'country--list--' + i}
                                    id={name}
                                    text={name}
                                    value={name}
                                    name={'degreeType'}
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
                                                name
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
                                        key={'degree-type--list--' + degree.id}
                                        id={degree.name}
                                        text={degree.name}
                                        name={'degrees'}
                                        value={degree.name}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                )
            )}
        </div>
    );
};

export default DegreeLevelFilter;
