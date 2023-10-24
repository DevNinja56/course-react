import { ROUTES } from '@/config/constant';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const NotFound = () => {
    const { push } = useRouter();

    useEffect(() => {
        push(ROUTES.HOMEPAGE);
    }, []);

    return (
        <div className="w-screen h-screen grid place-content-center">
            Route link does not found!..
        </div>
    );
};

export default NotFound;
