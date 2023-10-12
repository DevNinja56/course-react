import { useGetDegreeTypesQuery } from '@/store/slices/allRequests';
import React, { useState } from 'react';
import { FilterCheckBox } from './FilterCheckBOx';
import { BiChevronRight } from 'react-icons/bi';
import { useFilterQuery } from '@/hooks/filterQuery';

const DegreeLevelFilter = () => {
    const { data: degreeType } = useGetDegreeTypesQuery();
    const [open, setOpen] = useState<number | null>(null);
    const { query } = useFilterQuery();

    return (
        <div className="flex flex-col gap-y-3">
            <h1 className="text-lg text-darkGrayColor font-medium px-4">
                Degree Level
            </h1>
            {degreeType?.map((type, i) => (
                <div
                    className="flex flex-col "
                    key={'country--list--' + type.name}
                >
                    <div className="relative flex w-full justify-around items-center">
                        <FilterCheckBox
                            key={'country--list--' + type.id}
                            id={type.name}
                            text={type.name}
                            value={type.name}
                            name={'degreeType'}
                        />
                        <span className="mx-2">
                            <BiChevronRight
                                onClick={() =>
                                    setOpen((prev) => (prev === i ? null : i))
                                }
                                className={`text-grayColor transition-all text-2xl cursor-pointer ${
                                    query['degreeType']?.includes(type.name) ||
                                    i === open
                                        ? 'rotate-[-90deg]'
                                        : 'rotate-[90deg]'
                                }`}
                            />
                        </span>
                    </div>
                    <div
                        className={`px-5 overflow-hidden transition-all ${
                            query['degreeType']?.includes(type.name) ||
                            open === i
                                ? 'max-h-[300px]'
                                : 'max-h-0'
                        } `}
                    >
                        {type.degrees.map((degree) => (
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
            ))}
        </div>
    );
};

export default DegreeLevelFilter;
