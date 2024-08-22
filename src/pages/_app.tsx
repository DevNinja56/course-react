import type { AppProps } from 'next/app';
import MainLayout, { propsType } from '@/Layout/index';
import '@/styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Head from 'next/head';
import { useEffect } from 'react';
import { deleteCookie } from '@/utils/cookies';

const MyApp = ({ Component, pageProps }: AppProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const componentLayout = (Component as any).layout as propsType;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const lastCacheClear = localStorage.getItem('last-cache-clear');
            if (lastCacheClear === null) {
                localStorage.clear();
                deleteCookie('token');
                localStorage.setItem(
                    'last-cache-clear',
                    new Date().toISOString()
                );
                window.location.reload();
            }
        }
    }, []);

    return (
        <Provider store={store}>
            <Head>
                <title>Course Options</title>
            </Head>
            <MainLayout {...componentLayout}>
                <Component {...pageProps} />
            </MainLayout>
        </Provider>
    );
};

export default MyApp;
