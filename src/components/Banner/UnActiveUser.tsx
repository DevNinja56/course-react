import React from 'react';
import { ImBlocked } from 'react-icons/im';

const UnActiveUser = () => {
    return (
        <>
            <div
                id="bottom-banner"
                tabIndex={-1}
                className="flex justify-between w-full p-4 border-b border-gray-200 "
            >
                <div className="flex items-center mx-auto">
                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span className="mr-2 text-xl text-red-500">
                            <ImBlocked />
                        </span>
                        <span>You are blocked from Admin.</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default UnActiveUser;
