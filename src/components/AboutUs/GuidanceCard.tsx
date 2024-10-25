import React, { ReactNode } from 'react';

interface GuidanceCardProps {
    number: string;
    title: string;
    description: string;
    bgColor?: string;
    textColor?: string;
    icon?: ReactNode;
    svg?: string;
}

const GuidanceCard: React.FC<GuidanceCardProps> = ({
    number,
    title,
    icon,
    description,
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    svg
}) => {
    return (
        <div
            className={`${bgColor} ${textColor} w-52 p-6 rounded-lg flex flex-col justify-between`}
        >
            <div className="text-xl font-bold mb-4">{number}</div>

            <h1 className="text-3xl font-semibold mb-4">{title}</h1>
            <div className="flex justify-center items-center text-[100px]">
                {svg ? (
                    <img
                        src={svg}
                        alt={`${title} icon`}
                        className="w-24 h-24"
                    />
                ) : (
                    icon
                )}
            </div>
            <p className="text-lg mt-5">{description}</p>
        </div>
    );
};

export default GuidanceCard;
