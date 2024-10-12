import React from 'react';
import { MdOutlineAddCircle } from 'react-icons/md';
import { FaFileCircleCheck } from 'react-icons/fa6';
import { BiDownload } from 'react-icons/bi';

interface propTypes {
    text: string;
    url: string | undefined;
    description?: string;
    isActive?: boolean;
    isDownload?: boolean;
}

const RequirementBox = ({
    text,
    url,
    description,
    isActive = false,
    isDownload = false
}: propTypes) => {
    return (
        <>
            {description && (
                <p className="text-lightGrayColor mb-2 font-medium">
                    {description}
                </p>
            )}
            <div
                className={`px-6 py-5 mb-6 flex items-center justify-between w-full md:w-[70%] bg-white shadow-RequirementBox rounded-lg cursor-pointer ${isActive && 'border-green-600 border-2'} `}
            >
                <p className="font-bold text-lightGrayColor">{text}</p>
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    download={true}
                    title={`Download ${text} file`}
                    className="h-12 w-12 rounded-md bg-profileBgColor flex items-center justify-center min-w-[48px]"
                >
                    {isDownload ? (
                        <BiDownload className="text-blueColor h-8 w-8" />
                    ) : isActive ? (
                        <FaFileCircleCheck className="text-green-600 h-8 w-8" />
                    ) : (
                        <MdOutlineAddCircle className="text-blueColor h-8 w-8" />
                    )}
                </a>
            </div>
        </>
    );
};

export default RequirementBox;
