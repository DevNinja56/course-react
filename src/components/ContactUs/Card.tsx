import React from 'react';

interface CardProps {
    img: string;
    title: string;
    detail: string;
    description: string;
    maxWidth?: string; 
}

const Card = ({ img, title, detail, description, maxWidth = 'max-w-[80%]' }: CardProps) => {
    return (
        <div
            className="flex flex-col items-center gap-2 py-6 w-[85%] lg:w-72 bg-white rounded-2xl shadow-lg text-center self-center"
        >
            <div className="bg-profileBgColor p-2 rounded-xl mb-3">
                <img src={img} alt="icon" className="h-7 w-7" />
            </div>
            <h1 className="text-md font-[600] text-gray-800">{title}</h1>
            <p className={`text-xs ${maxWidth} text-gray-500 h-8`}>
                {description}
            </p>x``
            <h1 className="text-[#2563EB] font-bold text-xs mt-2">
                {detail}    
            </h1>
        </div>
    );
};

export default Card;
