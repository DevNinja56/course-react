import { useFilterQuery } from '@/hooks/filterQuery';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FilterAccordionProps {
    title: string;
    children: React.ReactNode;
    noBorder?: boolean;
    firstOpen?: boolean;
    icon?: React.ReactNode;
    name?: string;
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({
    title,
    children,
    noBorder,
    firstOpen,
    icon,
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

    return (
        <div className={`${noBorder ? '' : 'border-b border-gray-300'}`}>
            <div
                className="flex justify-between items-center px-4 py-2 cursor-pointer bg-white hover:bg-gray-200"
                onClick={toggleAccordion}
            >
                <div className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <h1>{icon}</h1>
                    <h1>{title}</h1>
                </div>
                <div className="flex gap-2 items-center">
                    {name && selectedCount > 0 && (
                        <h1 className="text-sm font-bold text-white bg-blue-600 w-6 h-6 rounded-full text-center flex items-center justify-center">
                            {selectedCount}
                        </h1>
                    )}
                    {isOpen ? (
                        <FiChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                        <FiChevronDown className="w-5 h-5 text-gray-600" />
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
