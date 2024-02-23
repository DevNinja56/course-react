import { applyTypes } from '@/types';
import React from 'react';

interface propTypes {
    selectedCourse: applyTypes;
}

const Apply = ({ selectedCourse }: propTypes) => {
    return (
        <div className="py-5 h-full w-full">
            {selectedCourse?.status?.apply?.document !== null && (
                <embed
                    className="w-full min-h-[2481px]"
                    src={`${
                        selectedCourse?.status?.apply?.document as string
                    }#toolbar=0&view=Fit#fullscreen`}
                ></embed>
            )}
        </div>
    );
};

export default Apply;
