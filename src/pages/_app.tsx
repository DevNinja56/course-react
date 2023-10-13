import type { AppProps } from 'next/app';
import MainLayout, { propsType } from '@/Layout/index';
import '@/styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from '@/store';

export default function App({ Component, pageProps }: AppProps) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const componentLayout = (Component as any).layout as propsType;

    return (
        <Provider store={store}>
            <MainLayout {...componentLayout}>
                <Component {...pageProps} />
            </MainLayout>
        </Provider>
    );
}
