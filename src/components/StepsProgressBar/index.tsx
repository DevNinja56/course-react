import { applicationStatus, statusEnum } from '@/types';
import React from 'react';
interface StepsProgressBarProps {
    status: applicationStatus;
}

const StepsProgressBar: React.FC<StepsProgressBarProps> = ({ status }) => {
    return (
        <div className="container-fluid ">
            <br />
            <br />
            <ul className="list-unstyled multi-steps">
                <li
                    className={
                        status.active === statusEnum.initiated
                            ? 'is-active'
                            : ''
                    }
                >
                    <p className="flex flex-col items-center justify-center  text-xs md:text-sm">
                        <span>Initiated</span>
                        <span className="text-darkGrayColor font-normal">
                            {new Date(
                                status.initiated.create_at
                            ).toDateString()}
                        </span>
                    </p>
                </li>
                <li
                    className={
                        status.active === statusEnum.submitDocuments
                            ? 'is-active'
                            : ''
                    }
                >
                    <p className="flex flex-col items-center justify-center text-xs md:text-sm">
                        <span>Submit Documents</span>
                        <span className="text-darkGrayColor font-normal">
                            {new Date(
                                status.submitDocuments?.create_at ?? ''
                            ).toDateString()}
                        </span>
                    </p>
                </li>
                <li
                    className={
                        status.active === statusEnum.apply ? 'is-active' : ''
                    }
                >
                    <p className="flex flex-col items-center justify-center text-xs md:text-sm">
                        <span>Apply</span>
                        <span className="text-darkGrayColor font-normal">
                            {new Date(
                                status.apply?.create_at ?? ''
                            ).toDateString()}
                        </span>
                    </p>
                </li>
                <li
                    className={
                        status.active === statusEnum.offer ? 'is-active' : ''
                    }
                >
                    <p className="flex flex-col items-center justify-center text-xs md:text-sm">
                        <span>Offer</span>
                        <span className="text-darkGrayColor font-normal">
                            {new Date(
                                status.offer?.create_at ?? ''
                            ).toDateString()}
                        </span>
                    </p>
                </li>
                <li
                    className={
                        status.active === statusEnum.visa ? 'is-active' : ''
                    }
                >
                    <p className="flex flex-col items-center justify-center text-xs md:text-sm">
                        <span>Visa</span>
                        <span className="text-darkGrayColor font-normal">
                            {new Date(
                                status.visa?.create_at ?? ''
                            ).toDateString()}
                        </span>
                    </p>
                </li>
                <li
                    className={
                        status.active === statusEnum.enroll ? 'is-active' : ''
                    }
                >
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
