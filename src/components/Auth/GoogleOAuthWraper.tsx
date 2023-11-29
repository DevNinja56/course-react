import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import { FaGoogle } from 'react-icons/fa6';

const GoogleOAuthWraper = () => {
    return (
        <GoogleOAuthProvider clientId="98540656991-u9ndiacbteb46k0a36l14k6hal76bkum.apps.googleusercontent.com">
            {/* <button
                type="button"
                className="flex justify-center items-center px-3 py-2 border-2 border-blueColor rounded-md text-blueColor gap-2 w-full my-2 hover:bg-blueColor hover:text-white"
            >
                <FaGoogle />
                Sign in with Google
            </button> */}
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log({ credentialResponse });
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleOAuthWraper;
