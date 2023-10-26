import { useUi } from '@/hooks/user-interface';
import React from 'react';
import { GrFormClose } from 'react-icons/gr';

const ResetPassword = () => {
    const { hideModal } = useUi();

    return (
        <div className=" rounded-[10px] flex flex-col items-center px-16 py-[35px] bg-white modal relative border-[3px] border-[#CCCCCC] ">
            <GrFormClose
                onClick={hideModal}
                className="absolute top-3 right-3 cursor-pointer"
            />
            <h1 className="text-mainTextColor font-bold text-[36px] mb-5">
                Reset Password
            </h1>
            <div className="flex flex-col gap-y-6 mb-7 w-full">
                <label className="text-lg text-darkGrayColor flex flex-col gap-y-1">
                    Email
                    <input className="pt-[14px] pb-[13px] pl-5 text-grayColor border border-grayColor rounded-[10px] w-full outline-none" />
                </label>
            </div>
            <button className="w-full pt-4 pb-[15px] rounded-[10px] bg-blueColor text-white font-semibold">
                Reset
            </button>
        </div>
    );
};

export default ResetPassword;
