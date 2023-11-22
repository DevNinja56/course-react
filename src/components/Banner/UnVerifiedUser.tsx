import { useUserAuth } from '@/hooks/auth';
import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';

const UnVerifiedUser = () => {
    const { user } = useUserAuth();
    return (
        <>
            {user.status === 'in-active' && (
                <div
                    id="bottom-banner"
                    tabIndex={-1}
                    className="flex justify-between w-full p-4 border-b border-gray-200 "
                >
                    <div className="flex items-center mx-auto">
                        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                            <span className="mr-2 text-xl text-yellow-500">
                                <IoWarningOutline />
                            </span>
                            <span>
                                Please check your inbox to verify your account.
                                <button className="flex items-center ms-0 text-sm font-medium text-blueColor   md:ms-1 md:inline-flex hover:underline">
                                    Resend Email
                                </button>
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default UnVerifiedUser;
