import Image from 'next/image';
import React from 'react';

interface propTypes {
    img: string;
    text: string;
}

const Tag = ({ img, text }: propTypes) => {
    return (
        <div className="py-1 px-2 gap-1 flex items-center rounded-3xl bg-profileBgColor">
            <Image height={20} width={20} alt="" src={img} priority />
            <p className="text-xs text-blueColor">{text}</p>
        </div>
    );
};

export default Tag;
