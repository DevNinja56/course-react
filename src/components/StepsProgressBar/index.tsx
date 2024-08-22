import { applicationStatus, statusEnum } from '@/types';
import React from 'react';
interface StepsProgressBarProps {
    status: applicationStatus;
}

const StepsProgressBar: React.FC<StepsProgressBarProps> = ({ status }) => {
    return (
        <div className="container-fluid">
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
                    <p className="flex flex-col items-center justify-center text-[9px] md:text-[13px]">
                        <span>Initiated</span>
                        <span className="text-darkGrayColor font-normal text-[8px] md:text-[13px]">
                            {status.initiated !== null
                                ? new Date(
                                      status.initiated.create_at
                                  ).toDateString()
                                : ''}
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
                    <p className="flex flex-col items-center justify-center text-[9px] md:text-[13px]">
                        <span>Submit Documents</span>
                        <span className="text-darkGrayColor font-normal text-[8px] md:text-sm">
                            {status.submitDocuments !== null
                                ? new Date(
                                      status.submitDocuments?.create_at ?? ''
                                  ).toDateString()
                                : ''}
                        </span>
                    </p>
                </li>
                <li
                    className={
                        status.active === statusEnum.apply ? 'is-active' : ''
                    }
                >
                    <p className="flex flex-col items-center justify-center text-[9px] md:text-[13px]">
                        <span>Apply</span>
                        <span className="text-darkGrayColor font-normal text-[8px] md:text-[13px]">
                            {status.apply !== null
                                ? new Date(
                                      status.apply?.create_at ?? ''
                                  ).toDateString()
                                : ''}
                        </span>
                    </p>
                </li>
                <li
                    className={
                        status.active === statusEnum.offer ? 'is-active' : ''
                    }
                >
                    <p className="flex flex-col items-center justify-center text-[9px] md:text-[13px]">
                        <span>Offer</span>
                        <span className="text-darkGrayColor font-normal text-[8px] md:text-[13px]">
                            {status.offer !== null
                                ? new Date(
                                      status.offer?.create_at ?? ''
                                  ).toDateString()
                                : ''}
                        </span>
                    </p>
                </li>
                <li
                    className={
                        status.active === statusEnum.visa ? 'is-active' : ''
                    }
                >
                    <p className="flex flex-col items-center justify-center text-[9px] md:text-[13px]">
                        <span>Visa</span>
                        <span className="text-darkGrayColor font-normal text-[8px] md:text-[13px]">
                            {status.visa !== null
                                ? new Date(
                                      status.visa?.create_at ?? ''
                                  ).toDateString()
                                : ''}
                        </span>
                    </p>
                </li>
                <li
                    className={
                        status.active === statusEnum.enroll ? 'is-active' : ''
                    }
                >
                    <p className="flex flex-col items-center justify-center text-[9px] md:text-[13px]">
                        <span>Enroll</span>
                        <span className="text-darkGrayColor font-normal text-[8px] md:text-[13px]"></span>
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default StepsProgressBar;
