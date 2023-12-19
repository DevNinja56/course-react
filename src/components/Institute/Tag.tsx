import React from 'react';

interface propTypes {
    text: string;
    icon: React.ReactElement;
}

const Tag = ({ icon, text }: propTypes) => {
    return (
        <div className="py-1 px-2 gap-1 flex items-center rounded-3xl bg-profileBgColor">
            {icon}
            <p className="text-xs text-blueColor">{text}</p>
        </div>
    );
};

export default Tag;
