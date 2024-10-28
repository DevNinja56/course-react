import React from 'react';

interface propTypes {
    number: string;
    title: string;
    headingCOlor: string;
}

const SearchAnywhereContainer = ({
    number,
    title,
    headingCOlor
}: propTypes) => {
    return (
        <div className="flex flex-col font-bold">
            <h1
                className={`text-3xl md:text-4xl lg:text-5xl  ${headingCOlor} secondaryFont`}
            >
                {number}+
            </h1>
            <h2 className="text-base md:text-xl lg:text-2xl font-bold text-white">
                {title}
            </h2>
        </div>
    );
};

export default SearchAnywhereContainer;
