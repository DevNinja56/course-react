import React from 'react';
interface propTypes {
    heading: string;
    description: string;
}

const KeyService = ({ heading, description }: propTypes) => {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-lg md:text-xl text-[#2563EB] font-bold">{heading}</h1>
            <p className="text-xs md:text-sm">{description}</p>
        </div>
    );
};

export default KeyService;
