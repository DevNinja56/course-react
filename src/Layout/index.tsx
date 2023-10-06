'use client';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useUserAuth } from '@/hooks/auth';
import ScreenLoader from '@/components/Loader/ScreenLoader';
import { getCookie } from '@/utils/cookies';
import { useRouter } from 'next/router';
import { ROUTES } from '@/config/constant';

export interface propsType {
    children: React.ReactElement;
    header?: boolean;
    footer?: boolean;
    auth?: boolean;
    isPublic?: boolean;
}

const MainLayout = ({
    children,
    header = true,
    footer = true,
    auth = false,
    isPublic = false
}: propsType) => {
    const { refetchUser, isAuthenticated, isLoading } = useUserAuth();
    const token = getCookie('access_token');
    const router = useRouter();

    useEffect(() => {
        // If the route requires authentication but no token is available, redirect to sign-in
        if (auth && !token) {
            router.push(ROUTES.SIGN_IN);
            return;
        }

        // If the route is public and the user is already authenticated, redirect to the homepage
        if (isPublic && isAuthenticated) {
            router.push(ROUTES.HOMEPAGE);
            return;
        }

        // If the route requires authentication and the user is not authenticated, refetch user data
        if (token && !isAuthenticated) {
            refetchUser();
        }
    }, [auth, token, isAuthenticated]);

    const Layout = () => (
        <>
            {header && <Header />}
            <div className="bg-lightColor">{children}</div>
            {footer && <Footer />}
        </>
    );

    if (isLoading) return <ScreenLoader />;

    return (
        <>
            {auth ? (
                <>{isAuthenticated ? <Layout /> : <ScreenLoader />}</>
            ) : (
                <Layout />
            )}
            <Toaster position="bottom-right" reverseOrder={false} />
        </>
    );
};

export default MainLayout;
