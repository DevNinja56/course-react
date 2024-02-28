import React from 'react';

interface propTypes {
    icon: React.ReactElement;
    text: string;
    tagName: string;
}

const CourseTag = ({ icon, text, tagName }: propTypes) => {
    return (
        <div className="flex flex-col gap-5 capitalize ">
            <div className="flex items-center gap-2">
                {icon}
                <h1 className="font-bold text-lg md:text-xl text-mainTextColor">
                    {text}
                </h1>
            </div>
            <div>
                <button className="py-4 px-10 rounded-lg shadow-custom text-sm md:text-xl text-lightGrayColor">
                    {tagName}
                </button>
            </div>
        </div>
    );
};

export default CourseTag;
