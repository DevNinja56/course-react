import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import LoaderSpinner from '../LoaderSpinner';
import toast from 'react-hot-toast';
import { fetchRequest } from '@/utils/axios/fetch';
import { useUserAuth } from '@/hooks/auth';
import { useRouter } from 'next/router';
import { ROUTES } from '@/config/constant';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';

interface propsType {
    isActive?: boolean;
    className?: string;
    body: { [key: string]: string };
    refetch?: () => void;
}

const FavoriteButton: React.FC<propsType> = ({
    isActive = false,
    className,
    body,
    refetch
}) => {
    const [isLoading, setLoading] = useState(false);
    const { isAuthenticated } = useUserAuth();
    const { push } = useRouter();

    const handleClick = () => {
        // check if user is not authenticated
        if (!isAuthenticated) {
            push(ROUTES.SIGN_IN);
            return;
        }

        setLoading(true);
        toast
            .promise(
                fetchRequest({
                    url: isActive
                        ? API_ENDPOINTS.FAVORITE_DELETE
                        : API_ENDPOINTS.FAVORITE,
                    type: 'post',
                    body
                }),
                {
                    loading: 'loading...',
                    success: (res) => {
                        refetch?.();
                        return res.message;
                    },
                    error: (err) => err.response.data.message
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <button
            className={
                className ??
                `h-[36px] w-[36px]  rounded-full  cursor-pointer flex items-center justify-center group absolute top-4 right-4 z-10 bg-black bg-opacity-40`
            }
            onClick={handleClick}
        >
            {isLoading ? (
                <LoaderSpinner />
            ) : isActive ? (
                <AiFillHeart className={`text-2xl text-white   `} />
            ) : (
                <AiOutlineHeart className={`text-2xl text-white   `} />
            )}
        </button>
    );
};

export default FavoriteButton;
