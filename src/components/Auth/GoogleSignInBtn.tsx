import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import { fetchRequest } from '@/utils/axios/fetch';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { useUserAuth } from '@/hooks/auth';
import { useRouter } from 'next/router';
import { ROUTES } from '@/config/constant';
import toast, { LoaderIcon } from 'react-hot-toast';

const GoogleOAuthWraper = ({ isRegister }: { isRegister?: boolean }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { updateUserDetails, loggedInUser } = useUserAuth();
    const { push } = useRouter();

    const handleLogin = useGoogleLogin({
        onSuccess: (response) => {
            setIsLoading(true);

            fetchRequest({
                url: API_ENDPOINTS.AUTH.GOOGLE_SIGN_IN,
                body: { token: response.access_token },
                type: 'post'
            })
                .then((res) => {
                    updateUserDetails(res.data.user);
                    loggedInUser({
                        access: res.data.accessToken,
                        refresh: res.data.refreshToken
                    });
                    push(ROUTES.HOMEPAGE);
                    toast.success('User Logged In Success');
                })
                .catch((err) =>
                    toast.error(
                        err.response?.data?.message ?? 'An error occurred'
                    )
                )
                .finally(() => setIsLoading(false));
        }
    });

    return (
        <>
            <button
                type="button"
                className="flex justify-center items-center px-3 py-2 border border-gray-300 rounded-md text-gray-500 gap-2 w-full my-2 hover:bg-gray-100 "
                onClick={() => handleLogin()}
            >
                <FcGoogle />
                {isRegister ? 'Register with Google' : 'Sign in with Google'}
                {isLoading && <LoaderIcon />}
            </button>
        </>
    );
};

export default GoogleOAuthWraper;
