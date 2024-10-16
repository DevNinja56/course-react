import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface SubFilterAccordionProps {
    title: string;
    children?: React.ReactNode;
    noBorder?: boolean;
    count?: number;
}

const SubFilterAccordion: React.FC<SubFilterAccordionProps> = ({
    title,
    children,
    noBorder,
    count
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={`${noBorder ? '' : 'border-b border-gray-300'}`}>
            <div
                className="flex justify-between items-center px-4 py-2 cursor-pointer bg-white hover:bg-gray-200 gap-3"
                onClick={toggleAccordion}
            >
                <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
                <div className='flex justify-center items-center gap-1'>
                    {count !== undefined && count > 0 && (
                        <div className="text-xs font-bold">{count}</div>
                    )}
                    {isOpen ? (
                        <FiChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                        <FiChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                </div>
            </div>
            {isOpen && (
                <div className="py-2 px-4 bg-white transition-all duration-300">
                    {children}
                </div>
            )}
        </div>
    );
};

export default SubFilterAccordion;
