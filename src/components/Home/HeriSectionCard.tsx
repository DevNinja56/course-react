import React from 'react';

interface propTypes {
    Icon: React.ReactElement;
    heading: string;
    title: string;
}

const HeroSectionCard = ({ Icon, heading, title }: propTypes) => {
    return (
        <div className="flex items-center gap-1.5 md:gap-3">
            <div className="h-8 w-8 md:h-[60px] md:w-[60px] rounded-full bg-white border-2 md:border-4 border-blueColor flex items-center justify-center">
                {Icon}
            </div>
            <div className="flex flex-col font-bold text-base md:text-3xl text-white">
                <h1 className="leading-3 md:leading-5">{heading}</h1>
                <span className="text-[10px] md:text-[13px] h-4">{title}</span>
            </div>
        </div>
    );
};

export default HeroSectionCard;
