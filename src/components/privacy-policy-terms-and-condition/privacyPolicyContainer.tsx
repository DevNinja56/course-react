import React from 'react';

interface propTypes {
    heading: string;
    description: string;
}

const PrivacyPolicyContainer = ({ heading, description }: propTypes) => {
    return (
        <div>
            <h1 className="text-white text-base md:text-lg font-bold">
                {heading}
            </h1>
            <p className="text-xs md:text-sm text-white font-medium pl-1.5">
                {description}
            </p>
        </div>
    );
};

export default PrivacyPolicyContainer;
