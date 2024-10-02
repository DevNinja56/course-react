import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
interface FilterAccordionProps {
    title: string;
    children: React.ReactNode; 
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="border-b border-gray-300">
            <div
                className="flex justify-between items-center px-4 py-2 cursor-pointer bg-white hover:bg-gray-200"
                onClick={toggleAccordion}
            >
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                {isOpen ? (
                    <FiChevronUp className="w-5 h-5 text-gray-600" /> 
                ) : (
                    <FiChevronDown className="w-5 h-5 text-gray-600" /> 
                )}
            </div>
            {isOpen && (
                <div className="p-4 bg-white transition-all duration-300">
                    {children}
                </div>
            )}
        </div>
    );
};

export default FilterAccordion;
