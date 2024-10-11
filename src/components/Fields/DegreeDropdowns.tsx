import { degreeType } from '@/types';
import React from 'react';
import { stateType } from './Card';
import Link from 'next/link';
import { ROUTES } from '@/config/constant';
import { useCoursesFilterQuery } from '@/hooks/filterCoursesQuery';

interface propsType {
    data: degreeType[];
    type: 'undergraduate' | 'postgraduate' | 'research';
    setOpen: React.Dispatch<React.SetStateAction<stateType>>;
}

const DegreeDropdowns: React.FC<propsType> = ({ setOpen, data, type }) => {
    const { addQuery } = useCoursesFilterQuery();
    return (
        <div className="absolute top-2 left-2 w-full bg-white shadow-lg z-10 ">
            <div
                className="fixed top-0 left-0 w-screen h-screen z-0 cursor-default  "
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen((prev) => ({
                        ...prev,
                        [type]: false
                    }));
                }}
            ></div>
            <div className="flex flex-col ">
                {data?.map(({ name }, i) => (
                    <Link
                        href={ROUTES.FILTER_COURSE}
                        onClick={() => {
                            addQuery({ degrees: [name] });
                        }}
                        className="z-20 p-2 hover:bg-blueColor hover:text-white "
                        key={'degree_type_list_' + i}
                    >
                        {name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DegreeDropdowns;
