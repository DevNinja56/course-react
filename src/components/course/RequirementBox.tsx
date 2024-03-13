import React from 'react';
import { MdOutlineAddCircle } from 'react-icons/md';
import { FaFileCircleCheck } from "react-icons/fa6";

interface propTypes {
    text: string;
    url: string | undefined;
}

const RequirementBox = ({ text, url }: propTypes) => {
    return (
        <div className="px-6 py-5 flex items-center justify-between w-full bg-white shadow-RequirementBox rounded-lg cursor-pointer">
            <p className="font-medium text-lightGrayColor">{text}</p>
            <a
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                download={true}
                title={`Download ${text} file`}
                className="h-12 w-12 rounded-md bg-profileBgColor flex items-center justify-center min-w-[48px]"
            >
                {url ? (
                    <FaFileCircleCheck className="text-blueColor h-8 w-8" />
                ) : (
                    <MdOutlineAddCircle className="text-blueColor h-8 w-8" />
                )}
            </a>
        </div>
    );
};

export default RequirementBox;
