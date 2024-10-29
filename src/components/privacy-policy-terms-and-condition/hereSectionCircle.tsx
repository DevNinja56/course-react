import React from 'react';

interface propTypes {
    size?: string;
    color: string;
    position: string;
}

const HereSectionCircle = ({ size, color, position }: propTypes) => {
    return (
        <div
            className={`${size ? size : 'h-12 w-12'} rounded-full ${color} absolute ${position} hidden lg:block`}
        ></div>
    );
};

export default HereSectionCircle;
