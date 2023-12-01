import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import { useUserAuth } from '@/hooks/auth';
import { fetchRequest } from '@/utils/axios/fetch';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import toast, { LoaderIcon } from 'react-hot-toast';
import { FaFacebookF } from 'react-icons/fa6';

const FacebookLoginBtn = ({ isRegister }: { isRegister?: boolean }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { updateUserDetails, loggedInUser } = useUserAuth();
    const { push } = useRouter();

    const responseFacebook = (response: { [key: string]: string }) => {
        setIsLoading(true);
        fetchRequest({
            url: API_ENDPOINTS.AUTH.FACEBOOK_SIGN_IN,
            body: response,
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
                toast.error(err.response?.data?.message ?? 'An error occurred')
            )
            .finally(() => setIsLoading(false));
    };

    return (
        <div>
            <FacebookLogin
                appId={process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID ?? ''}
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
                render={({ onClick }) => (
                    <button
                        type="button"
                        onClick={onClick}
                        className="flex justify-center items-center px-3 py-2 border border-blueColor rounded-md text-white bg-blueColor gap-2 w-full my-2 hover:bg-gray-100 hover:border-gray-300 hover:text-blue-500 "
                    >
                        <FaFacebookF />
                        {isRegister
                            ? 'Register with Facebook'
                            : 'Sign in with Facebook'}
                        {isLoading && <LoaderIcon />}
                    </button>
                )}
            />
        </div>
    );
};

export default FacebookLoginBtn;
