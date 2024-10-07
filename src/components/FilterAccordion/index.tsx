import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FilterAccordionProps {
    title: string;
    children: React.ReactNode;
    noBorder?: boolean; 
    firstOpen?:boolean;
    icon?:React.ReactNode;
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({ title, children, noBorder,firstOpen,icon }) => {
    const [isOpen, setIsOpen] = useState(firstOpen ?? false);

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
                {isOpen ? (
                    <FiChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                    <FiChevronDown className="w-5 h-5 text-gray-600" />
                )}
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
