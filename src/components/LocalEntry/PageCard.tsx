import React from 'react';

interface CardProps {
    imageUrl: string;
    heading: string;
    description: string;
    reverse?: boolean;
}

const PageCard = ({
    imageUrl,
    heading,
    description,
    reverse = false
}: CardProps) => {
    return (
        <div className={`${!reverse ? 'bg-white' : 'bg-[#fbfcff]'} p-5 md:p-10`}>
            <div
                className={`flex flex-col ${
                    reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center justify-center lg:justify-evenly px-5 lg:px-10`}
            >
                <div className="text-center lg:text-left">
                    <h1 className="text-xl max-[400px]:text-[1.1rem] sm:text-2xl lg:text-3xl text-[#2563eb] font-extrabold">
                        {heading}
                    </h1>
                    <p className="mt-1 text-sm sm:text-base lg:text-md max-w-[600px]">
                        {description}
                    </p>
                </div>
                <img
                    src={imageUrl}
                    alt={heading}
                    className={`h-48 sm:h-56 lg:h-64 object-contain mt-6 lg:mt-0 ${
                        reverse ? 'lg:mr-10' : 'lg:ml-10'
                    } drop-shadow-2xl`}
                />
            </div>
        </div>
    );
};

export default PageCard;
