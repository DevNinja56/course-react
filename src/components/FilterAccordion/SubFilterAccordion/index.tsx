import React, { useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';

interface SubFilterAccordionProps {
    title: string;
    children?: React.ReactNode;
    noBorder?: boolean;
    count?: number;
}

const SubFilterAccordion = ({
    title,
    children,
    noBorder,
    count
}: SubFilterAccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={`${noBorder ? '' : 'border-b border-gray-300'}`}>
            <div
                className="flex justify-between items-center px-2 py-1 cursor-pointer bg-white hover:bg-gray-200 gap-3"
                onClick={toggleAccordion}
            >
                <h2 className="text-sm font-semibold flex-1 text-black group-hover:text-blueColor capitalize line-clamp-1 flex justify-between w-full items-center">
                    {title}
                </h2>
                <div className="flex justify-center items-center gap-1">
                    {count !== undefined && (
                        <div className="text-gray-500 py-1 px-2  text-xs bg-gray-100 rounded-lg font-semibold">
                            {count}
                        </div>
                    )}
                    <FiChevronUp
                        className={`w-5 h-5 text-gray-600 ${isOpen ? 'rotate-0' : 'rotate-180'} text-black`}
                    />
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
