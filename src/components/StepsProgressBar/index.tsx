import React from 'react';
interface StepsProgressBarProps {
    status?: string;
}

const StepsProgressBar: React.FC<StepsProgressBarProps> = ({ status }) => {
    return (
        <div className="container-fluid ">
            <br />
            <br />
            <ul className="list-unstyled multi-steps">
                <li className={status === 'Initiated' ? 'is-active' : ''}>
                    <p className="flex flex-col items-center justify-center  text-xs md:text-sm">
                        <span>Initialted</span>
                        <span className="text-darkGrayColor font-normal">
                            18 Jan 2024
                        </span>
                    </p>
                </li>
                <li className={status === 'SubmitDocuments' ? 'is-active' : ''}>
                    <p className="flex flex-col items-center justify-center text-xs md:text-sm">
                        <span>Submit Documents</span>
                        <span className="text-darkGrayColor font-normal">
                            18 Jan 2024
                        </span>
                    </p>
                </li>
                <li className={status === 'Apply' ? 'is-active' : ''}>
                    <p className="flex flex-col items-center justify-center text-xs md:text-sm">
                        <span>Apply</span>
                        <span className="text-darkGrayColor font-normal"></span>
                    </p>
                </li>
                <li className={status === 'Offer' ? 'is-active' : ''}>
                    <p className="flex flex-col items-center justify-center text-xs md:text-sm">
                        <span>Offer</span>
                        <span className="text-darkGrayColor font-normal"></span>
                    </p>
                </li>
                <li className={status === 'Visa' ? 'is-active' : ''}>
                    <p className="flex flex-col items-center justify-center text-xs md:text-sm">
                        <span>Visa</span>
                        <span className="text-darkGrayColor font-normal"></span>
                    </p>
                </li>
                <li className={status === 'Enroll' ? 'is-active' : ''}>
                    <p className="flex flex-col items-center justify-center text-xs md:text-sm">
                        <span>Enroll</span>
                        <span className="text-darkGrayColor font-normal"></span>
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default StepsProgressBar;
