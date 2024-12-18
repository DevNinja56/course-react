import React, { ReactElement, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface propsType {
    data: { title: string; element: ReactElement }[];
    isButton?: boolean; 
}

const Tabs: React.FC<propsType> = ({ data, isButton }) => {
    const [activeIndex, setIndex] = useState<number>(0);
    const [showElementIndex, setShowElementIndex] = useState<number | null>(
        null
    );

    const toggleShowElement = (index: number) => {
        setShowElementIndex(showElementIndex === index ? null : index);
    };

    if (isButton) {
        return (
            <>
                <div className="w-full">
                    <ul className="flex flex-col md:flex-row md:gap-3 justify-start text-center text-sm font-medium capitalize">
                        {data.map(({ title }, i) => (
                            <li
                                key={'tabs-key--' + title}
                                className="me-0 flex flex-col md:inline-block"
                            >
                                <button
                                    className={`py-3 px-4 w-full md:w-auto text-base font-normal border border-gray-300 
                                        ${
                                            activeIndex === i
                                                ? 'text-white bg-blueColor border-blueCbg-blueColor'
                                                : 'text-gray-500 bg-white hover:bg-blue-100 hover:text-blueCbg-blueColor'
                                        }
                                        md:rounded-md transition-colors duration-200`}
                                    onClick={() => setIndex(i)}
                                >
                                    {title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="py-8">{data[activeIndex].element}</div>
            </>
        );
    }

    return (
        <>
            <div className="text-sm font-medium text-center text-gray-500 md:border-b-2 md:border-gray-300 w-full">
                <ul className="flex-col md:flex-row flex w-full justify-start -mb-px capitalize">
                    {data.map(({ title }, i) => (
                        <li
                            className="me-0 flex flex-col md:inline-block"
                            key={'tabs-key--' + title}
                        >
                            <button
                                className={`md:inline-block py-3 md:p-2 rounded-t-lg border-b md:border-b-2 text-sm xl:text-base flex items-center justify-between w-full md:w-auto ${
                                    activeIndex === i
                                        ? 'text-blueColor md:text-blueColor md:border-blueColor'
                                        : 'md:border-transparent md:hover:text-gray-600 md:text-mainTextColor text-blueColor'
                                }`}
                                onClick={() => {
                                    setIndex(i);
                                    toggleShowElement(i);
                                }}
                            >
                                {title}
                                <IoIosArrowDown
                                    className={`block md:hidden text-mainTextColor ${
                                        showElementIndex === i
                                            ? 'rotate-180'
                                            : 'rotate-0'
                                    }`}
                                />
                            </button>
                            {showElementIndex === i && (
                                <div className="py-8 block w-full md:hidden">
                                    {data[i].element}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="py-10 hidden md:block">{data[activeIndex].element}</div>
        </>
    );
};

export default Tabs;
