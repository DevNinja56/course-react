import React, { ReactElement, useState } from 'react';

interface propsType {
    data: { title: string; element: ReactElement }[];
}

const Tabs: React.FC<propsType> = ({ data }) => {
    const [activeIndex, setIndex] = useState<number>(1);
    return (
        <>
            <div className="text-sm font-medium text-center text-gray-500 border-b-2 border-gray-300">
                <ul className="flex flex-wrap -mb-px capitalize">
                    {data.map(({ title }, i) => (
                        <li className="me-2" key={'tabs-key--' + title}>
                            <button
                                className={`inline-block p-2 rounded-t-lg border-b-2 text-base font-semibold ${
                                    activeIndex === i
                                        ? 'text-blueColor border-blueColor'
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
            <div className="py-10">{data[activeIndex].element}</div>
        </>
    );
};

export default Tabs;
