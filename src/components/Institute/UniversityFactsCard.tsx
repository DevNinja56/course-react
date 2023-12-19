import React from 'react';

interface UniversityFactsCardProps {
    icon: React.ReactElement;
    types: string;
    text: string;
}

const UniversityFactsCard = ({
    icon,
    types,
    text
}: UniversityFactsCardProps) => {
    return (
        <div className="pl-3 py-3 flex items-center gap-2 bg-profileBgColor rounded-lg">
            {icon}
            <div className="flex flex-col gap-1">
                <p className="text-xs text-grayColor">{types}</p>
                <h1 className="text-mainTextColor text-sm font-semibold">
                    {text}
                </h1>
            </div>
        </div>
    );
};

export default UniversityFactsCard;
