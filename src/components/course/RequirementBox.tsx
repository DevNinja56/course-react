import React from 'react';
import { FiPlus } from 'react-icons/fi';

interface propTypes {
    text: string;
}

const RequirementBox = ({ text }: propTypes) => {
    return (
        <div className="px-6 py-5 flex items-center justify-between w-full bg-white shadow-RequirementBox rounded-lg">
            <p className="font-medium text-lightGrayColor">{text}</p>
            <button className="h-12 w-12 rounded-md bg-profileBgColor flex items-center justify-center min-w-[48px]">
                <FiPlus className="text-blueColor h-8 w-8" />
            </button>
        </div>
    );
};

export default RequirementBox;
