import Link from 'next/link';
import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';

interface propTypes {
    text: string;
    url: string;
}

const RequirementBox = ({ text, url }: propTypes) => {
    return (
        <div className="px-6 py-5 flex items-center justify-between w-full bg-white shadow-RequirementBox rounded-lg">
            <p className="font-medium text-lightGrayColor">{text}</p>
            <Link
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                download="true"
                title={`Download ${text} file`}
                className="h-12 w-12 rounded-md bg-profileBgColor flex items-center justify-center min-w-[48px]"
            >
                <MdOutlineFileDownload className="text-blueColor h-8 w-8" />
            </Link>
        </div>
    );
};

export default RequirementBox;
