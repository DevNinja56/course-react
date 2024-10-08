import React from 'react';

interface propTypes {
    text: string;
    icon: React.ReactElement;
    className?: string;
}

const Tag = ({ icon, text, className }: propTypes) => {
    return (
        <div className={`w-full p-2 flex items-center gap-2 ${className}`}>
            <div className="p-2 bg-blueColor bg-opacity-20  rounded-full">
                {icon}
            </div>
            <p className="text-xs text-blueColor text-center">{text}</p>
        </div>
    );
};

export default Tag;
