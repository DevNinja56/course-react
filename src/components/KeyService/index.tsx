import React from 'react';
interface propTypes {
    heading: string;
    description: string;
}

const KeyService = ({ heading, description }: propTypes) => {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-xl md:text-2xl text-[#2563EB] font-bold">
                {heading}
            </h1>
            <p className="text-base md:text-xl text-gray-500 font-medium">
                {description}
            </p>
        </div>
    );
};

export default KeyService;
