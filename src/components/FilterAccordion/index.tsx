import { useFilterQuery } from '@/hooks/filterQuery';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';

interface FilterAccordionProps {
    title: string;
    children: React.ReactNode;
    noBorder?: boolean;
    firstOpen?: boolean;
    icon?: React.ReactNode;
    name?: string;
    svg?: boolean;
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({
    title,
    children,
    noBorder,
    firstOpen,
    icon,
    svg,
    name
}) => {
    const [isOpen, setIsOpen] = useState(firstOpen ?? false);
    const { query } = useFilterQuery();

    const selectedCount = Array.isArray(query[name ?? ''])
        ? query[name ?? ''].length
        : query[name ?? '']
          ? 1
          : 0;

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    console.log(title, 'title');

    return (
        <div className={`${noBorder ? '' : 'border-b border-gray-300'}`}>
            <div
                className="flex justify-between items-center px-4 py-2 cursor-pointer bg-white hover:bg-gray-200"
                onClick={toggleAccordion}
            >
                <div className="text-base xl:text-lg font-semibold text-gray-800 flex items-center gap-1 xl:gap-2">
                    {!svg ? (
                        <h1>{icon}</h1>
                    ) : (
                        <Image
                            width={14}
                            height={14}
                            src="\images\FilterPage\English.svg"
                            alt=""
                            className="ml-0.5 mr-1"
                        />
                    )}
                    <h1>{title}</h1>

                    <FiChevronUp
                        className={`w-5 h-5 text-gray-600 ${isOpen ? 'rotate-0' : 'rotate-180'} text-black`}
                    />
                </div>
                <div className="flex gap-2 items-center">
                    <div>
                        {name && selectedCount > 0 && (
                            <h1 className="text-sm font-bold text-white bg-blue-600 w-6 h-6 rounded-full text-center flex items-center justify-center">
                                {selectedCount}
                            </h1>
                        )}
                    </div>
                    {title !== 'Degree Levels' &&
                        title !== 'Intakes' &&
                        title !== 'Language Test' && (
                            <IoSearch className="text-[#626262] font-bold" />
                        )}
                </div>
            </div>
            {isOpen && (
                <div className="px-4 py-2 bg-white transition-all duration-300">
                    {children}
                </div>
            )}
        </div>
    );
};

export default FilterAccordion;
