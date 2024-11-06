import Image from 'next/image';
import React from 'react';

interface propTypes {
    src: string;
}

const KeyServiceIconContainer = ({ src }: propTypes) => {
    return (
        <div className="h-20 md:h-24 lg:h-[120px] w-24 md:w-28 lg:w-36 bg-blueColor rounded-lg flex items-center justify-center">
            <Image
                className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                height={68}
                width={68}
                alt="key-icon"
                src={src}
            />
        </div>
    );
};

export default KeyServiceIconContainer;
