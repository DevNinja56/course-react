import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { useUserAuth } from '@/hooks/auth';
import { fetchRequest } from '@/utils/axios/fetch';
import React, { useState } from 'react';
import toast, { LoaderIcon } from 'react-hot-toast';
import { IoWarningOutline } from 'react-icons/io5';

const UnVerifiedUser = () => {
    const { user, isAuthenticated } = useUserAuth();
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        toast
            .promise(fetchRequest({ url: API_ENDPOINTS.AUTH.RESEND_EMAIL }), {
                loading: 'Please wait...',
                success: 'Email sent successfully',
                error: 'An error occurred'
            })
            .finally(() => setLoading(false));
    };

    return (
        <>
            {isAuthenticated && user.status === 'in-active' && (
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
                                <button
                                    onClick={handleClick}
                                    className="flex items-center ms-0 text-sm font-medium text-blueColor   md:ms-1 md:inline-flex hover:underline"
                                >
                                    Resend Email {loading && <LoaderIcon />}
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
