import React from 'react';

interface propTypes {
    text: string;
    icon: React.ReactElement;
    className?: string;
}

const Tag = ({ icon, text, className }: propTypes) => {
    return (
        <div
            className={`w-full h-20 py-5 px-2 flex flex-col gap-1.5 items-center border border-borderColor ${className}`}
        >
            {icon}
            <p className="text-xs text-blueColor text-center">{text}</p>
        </div>
    );
};

export default Tag;
