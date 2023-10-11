import { useGetDegreeTypesQuery } from '@/store/slices/allRequests';
import React, { useState } from 'react';
import { FilterCheckBox } from './FilterCheckBOx';
import { BiChevronRight } from 'react-icons/bi';

const DegreeLevelFilter = () => {
    const { data: degreeType } = useGetDegreeTypesQuery();
    const [open, setOpen] = useState<number | null>(null);

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
                            id={type.id}
                            text={type.name}
                            value={i}
                            customF={() =>
                                setOpen((prev) => (prev === i ? null : i))
                            }
                            isChecked={i === open}
                        />
                        <span className="mx-2">
                            <BiChevronRight
                                className={`text-grayColor transition-all text-2xl ${
                                    i === open
                                        ? 'rotate-[-90deg]'
                                        : 'rotate-[90deg]'
                                }`}
                            />
                        </span>
                    </div>
                    <div
                        className={`px-5 overflow-hidden transition-all ${
                            open === i ? 'max-h-[300px]' : 'max-h-0'
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
