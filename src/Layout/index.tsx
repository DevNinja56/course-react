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
import ModalWraper from '@/Modal';
import NextNProgress from 'nextjs-progressbar';
import UserActivation from '@/components/UserStatus/UserInActive';
import UserBlock from '@/components/UserStatus/Block';
import Testimonial from '@/components/Testimonial';
import CounselingWork from '@/components/CounselingWork/CounselingWork';
import ChatBoot from '@/components/ChatBoot';

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
    const { refetchUser, isAuthenticated, isLoading, user } = useUserAuth();
    const token = getCookie('access_token');
    const router = useRouter();
    const testimonialRoutes = [
        ROUTES.HOMEPAGE,
        ROUTES.COURSE.replace(':id', '[id]'),
        ROUTES.SCHOLARSHIP.replace(':id', '[id]'),
        ROUTES.INSTITUTES_DETAIL.replace(':id', '[id]'),
        ROUTES.ABOUT_US,
        ROUTES.BLOGS,
        ROUTES.COMPARE,
        ROUTES.CONTACT_US,
        ROUTES.COUNTRY,
        ROUTES.FAQ,
        ROUTES.FILTER_COURSE,
        ROUTES.FILTER_SCHOLARSHIP,
        ROUTES.INSTITUTES,
        ROUTES.FIELDS
    ];
    const counselingRoutes = [
        ROUTES.FIELDS,
        ROUTES.ABOUT_US,
        ROUTES.COURSE.replace(':id', '[id]'),
        ROUTES.SCHOLARSHIP.replace(':id', '[id]'),
        ROUTES.INSTITUTES_DETAIL.replace(':id', '[id]'),
        ROUTES.COUNTRY,
        ROUTES.INSTITUTES,
        ROUTES.FAQ
    ];

    useEffect(() => {
        // If the route requires authentication but no token is available, redirect to sign-in
        if (auth && !token) {
            router.push(ROUTES.SIGN_IN);
            return;
        }

        // If the route is public and the user is already authenticated, redirect to the homepage
        if (isPublic && isAuthenticated && token) {
            router.push(ROUTES.HOMEPAGE);
            return;
        }

        // If the route requires authentication and the user is not authenticated, refetch user data
        if (token && !isAuthenticated && !isLoading) {
            refetchUser();
        }
    }, [auth, token, isAuthenticated]);

    const Layout = () => (
        <div
            className={`w-screen h-screen overflow-x-hidden ${'overflow-y-auto`'}`}
        >
            {header && <Header />}
            <div
                className={`bg-lightColor ${header && 'mt-[100px] print:mt-0'}`}
            >
                {(router.pathname?.includes(ROUTES.SIGN_IN) ||
                    router.pathname?.includes(ROUTES.SIGN_UP)) && (
                    <Header onlyLogo />
                )}

                {auth && isAuthenticated ? (
                    user.status === 'active' ? (
                        children
                    ) : user.status === 'in-active' ? (
                        <UserActivation />
                    ) : (
                        <UserBlock />
                    )
                ) : (
                    children
                )}
                <ChatBoot />
                {counselingRoutes?.includes(router.pathname) && (
                    <CounselingWork />
                )}
                {testimonialRoutes?.includes(router.pathname) && (
                    <Testimonial />
                )}
            </div>
            {footer && <Footer />}
        </div>
    );

    if (isLoading) return <ScreenLoader />;

    return (
        <>
            {auth ? (
                <>{isAuthenticated ? <Layout /> : <ScreenLoader />}</>
            ) : (
                <Layout />
            )}
            {/* <TawkMessengerReact propertyId="property_id" widgetId="1hig23p0k" /> */}

            <Toaster position="bottom-center" reverseOrder={false} />
            <ModalWraper />
            <NextNProgress color="#435FB5" />
        </>
    );
};

export default React.memo(MainLayout);
