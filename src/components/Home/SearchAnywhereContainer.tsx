import React from 'react';

interface propTypes {
    number: string;
    title: string;
    headingColor: string;
    letterSpacing?: boolean;
}

const SearchAnywhereContainer = ({
    number,
    title,
    headingColor,
    letterSpacing
}: propTypes) => {
    return (
        <div className="flex flex-col items-center font-bold gap-1">
            <h1 className={`text-3xl md:text-4xl lg:text-5xl tracking-widest  ${headingColor}`}>
                {number}+
            </h1>
            <h2
                className={`text-base md:text-xl lg:text-2xl font-medium text-white ${letterSpacing && 'tracking-[16px]'}`}
            >
                {title}
            </h2>
        </div>
    );
};

export default SearchAnywhereContainer;
