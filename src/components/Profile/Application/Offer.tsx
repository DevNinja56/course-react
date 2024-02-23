import { applyTypes } from '@/types';
import React from 'react';

interface propTypes {
    selectedCourse: applyTypes;
}

const Offer = ({ selectedCourse }: propTypes) => {
    return (
        <div className="py-5">
            {selectedCourse?.status?.offer?.document !== null && (
                <object
                    className="w-full min-h-[2481px]"
                    data={`${
                        selectedCourse?.status?.offer?.document as string
                    }#toolbar=0&view=Fit#fullscreen`}
                ></object>
            )}
        </div>
    );
};

export default Offer;
