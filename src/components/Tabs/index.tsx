import React, { ReactElement, useState } from 'react';

interface propsType {
    data: { title: string; element: ReactElement }[];
}

const Tabs: React.FC<propsType> = ({ data }) => {
    const [activeIndex, setIndex] = useState<number>(0);
    return (
        <>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
                <ul className="flex flex-wrap -mb-px capitalize">
                    {data.map(({ title }, i) => (
                        <li className="me-2" key={'tabs-key--' + title}>
                            <button
                                className={`inline-block p-4 rounded-t-lg border-b-2 ${
                                    activeIndex === i
                                        ? 'text-blue-600 border-blue-600'
                                        : 'border-transparent hover:text-gray-600 text-black '
                                }`}
                                onClick={() => setIndex(i)}
                            >
                                {title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="py-5">{data[activeIndex].element}</div>
        </>
    );
};

export default Tabs;
