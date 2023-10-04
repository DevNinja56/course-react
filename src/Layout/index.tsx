import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useRouter } from 'next/router';

const MainLayout = ({ children }: { children: React.ReactElement }) => {
    const router = useRouter();
    return (
        <>
            {router.pathname === '/signIn' || router.pathname === '/signUp' ? (
                <div className="bg-lightColor">{children}</div>
            ) : (
                <>
                    <Header />
                    <div className="bg-lightColor">{children}</div>
                    <Footer />
                </>
            )}
        </>
    );
};

export default MainLayout;
