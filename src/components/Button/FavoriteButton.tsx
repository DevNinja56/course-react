import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { fetchRequest } from '@/utils/axios/fetch';
import { useUserAuth } from '@/hooks/auth';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';

interface propsType {
    isActive?: boolean;
    className?: string;
    extendClass?: string;
    body: { [key: string]: string };
    iconClass?: string;
    position?: string;
    callback?: () => void;
}

const FavoriteButton: React.FC<propsType> = ({
    isActive: isFav = false,
    className,
    extendClass,
    body,
    iconClass,
    position,
    callback
}) => {
    const [isActive, setIsActive] = useState(isFav);
    const { isAuthenticated } = useUserAuth();
    const { updateModal } = useUi();

    const handleClick = () => {
        // check if user is not authenticated
        if (!isAuthenticated) {
            updateModal({ type: modalType.login_confirmation, state: {} });
            return;
        }
        setIsActive((prev) => !prev);

        fetchRequest({
            url: isActive
                ? API_ENDPOINTS.FAVORITE_DELETE
                : API_ENDPOINTS.FAVORITE,
            type: 'post',
            body
        })
            .catch((err) => {
                setIsActive((prev) => !prev);
                toast.error(err.response.data.message);
            })
            .then(() => {
                callback?.();
            });
    };

    return (
        <button
            className={
                className ??
                `h-8 w-8  rounded-full  cursor-pointer flex items-center justify-center group ${
                    position ?? 'absolute top-4 right-4'
                }  z-10 bg-[#717070] bg-opacity-[50%] ${extendClass}`
            }
            onClick={handleClick}
        >
            {isActive ? (
                <AiFillHeart
                    className={`${
                        iconClass ?? 'text-2xl'
                    } text-red-500 h-5 w-5`}
                />
            ) : (
                <AiFillHeart
                    className={`${iconClass ?? 'text-2xl'} text-white h-5 w-5`}
                />
            )}
        </button>
    );
};

export default FavoriteButton;
