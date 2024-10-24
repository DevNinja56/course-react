import React from 'react';

interface CardProps {
    imageUrl: string;
    heading: string;
    description: string;
    colorChange?: boolean;
}

const StepsCard = ({
    imageUrl,
    heading,
    description,
    colorChange = false
}: CardProps) => {
    return (
        <div className={`${!colorChange ? 'bg-white' : 'bg-[#EAF2FF]'} p-5 md:p-10 !m-0`}>
            <div
                className={`flex flex-col 
                   lg:flex-row
                 items-center justify-center lg:justify-evenly px-5 lg:px-10`}
            >
                <div className="text-center lg:text-left">
                    <h1 className="text-xl max-[400px]:text-[1.1rem] sm:text-2xl lg:text-3xl text-[#2563eb] font-extrabold">
                        {heading}
                    </h1>
                    <p className="mt-1 text-sm sm:text-base lg:text-md lg:w-[450px]">
                        {description}
                    </p>
                </div>
                <img
                    src={imageUrl}
                    alt={heading}
                    className={`h-48 sm:h-56 lg:h-72 object-contain mt-6 lg:mt-0  drop-shadow-2xl scale-125`}
                />
            </div>
        </div>
    );
};

export default StepsCard;
