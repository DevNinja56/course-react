import { applyTypes } from '@/types';
import React from 'react';

interface propTypes {
    selectedCourse: applyTypes;
}

const Visa = ({ selectedCourse }: propTypes) => {
    return (
        <div className="py-5">
            {selectedCourse?.status?.visa?.document !== null && (
                <object
                    className="w-full min-h-[2481px]"
                    data={`${
                        selectedCourse?.status?.visa?.document as string
                    }#toolbar=0&view=Fit#fullscreen`}
                ></object>
            )}
        </div>
    );
};

export default Visa;
