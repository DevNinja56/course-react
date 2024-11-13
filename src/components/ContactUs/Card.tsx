import React from 'react';
import Button from '../Button';
import { FaArrowRight } from 'react-icons/fa6';

interface CardProps {
    img: string;
    title: string;
    detail: string;
    description: string;
    maxWidth?: string;
    button?: boolean;
}

const Card = ({
    img,
    title,
    detail,
    description,
    maxWidth = 'max-w-[80%]',
    button
}: CardProps) => {
    return (
        <div className="flex flex-col items-center gap-2 py-6 w-[85%] lg:w-72 bg-white rounded-2xl shadow-lg text-center self-center h-56">
            <div className="bg-profileBgColor p-2 rounded-xl mb-3">
                <img src={img} alt="icon" className="h-7 w-7" />
            </div>
            <h1 className="text-md font-[600] text-gray-800">{title}</h1>
            <p className={`text-xs ${maxWidth} text-gray-500 h-8`}>
                {description}
            </p>

            {button ? (
                <Button
                    icon={<FaArrowRight />}
                    text="Live Chat"
                    iconPlace
                    className="!w-fit !rounded-md px-5 !text-xs py-1 transition-all border-2 !font-bold mt-3"
                    variant="outline"
                />
            ) : (
                <h1 className="text-[#2563EB] font-bold text-xs mt-5">
                    {detail}
                </h1>
            )}
        </div>
    );
};

export default Card;
