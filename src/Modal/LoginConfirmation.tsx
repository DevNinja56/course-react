import Button from '@/components/Button';
import { ROUTES } from '@/config/constant';
import { useUi } from '@/hooks/user-interface';
import React from 'react';
import { GrFormClose } from 'react-icons/gr';

const LoginConfirmation = () => {
    const { hideModal } = useUi();
    return (
        <div className="bg-white p-10 border-4 border-[#CCCCCC] rounded-lg relative ">
            <GrFormClose
                onClick={hideModal}
                className="absolute top-3 right-3 cursor-pointer text-xl"
            />
            <h1 className="text-mainTextColor font-bold text-[36px] mb-5">
                Please Login!
            </h1>
            <Button
                className="pt-[14px] pb-[13px]"
                text="Go to Login Page"
                link={ROUTES.SIGN_IN}
                onClick={hideModal}
            />
        </div>
    );
};

export default LoginConfirmation;
