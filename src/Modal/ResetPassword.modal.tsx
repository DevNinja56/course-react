import Button from '@/components/Button';
import InputBox from '@/components/Input';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { useUi } from '@/hooks/user-interface';
import { forgotForm } from '@/types';
import { fetchRequest } from '@/utils/axios/fetch';
import { forgotFormSchema } from '@/utils/formSchemas';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { GrFormClose } from 'react-icons/gr';

const ResetPassword = () => {
    const { hideModal } = useUi();
    const {
        register,
        handleSubmit: fromSubmit,
        formState: { errors },
        setError
    } = useForm<forgotForm>({ resolver: forgotFormSchema });
    const [isLoading, setIsLoading] = useState(false);
    const [isSendMail, setIsSendMail] = useState(false);

    const handleSubmit = (body: forgotForm) => {
        setIsLoading(true);
        fetchRequest({
            url: API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
            type: 'post',
            body
        })
            .then((res) => {
                console.log(res);
                setIsSendMail(true);
            })
            .catch((err) => {
                console.log(err);
                setError('email', {
                    type: 'custom',
                    message: err.response.data.message
                });
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className=" rounded-[10px] flex flex-col items-center px-16 py-[35px] bg-white modal relative border-[3px] border-[#CCCCCC] w-[400px] ">
            <GrFormClose
                onClick={hideModal}
                className="absolute top-3 right-3 cursor-pointer"
            />
            <h1 className="text-mainTextColor font-bold text-[36px] mb-5">
                Reset Password
            </h1>
            {isSendMail ? (
                <>
                    <h2 className="text-center">
                        Please Check your Mail, Rest Password Link Has been Sent
                        to your Email Address
                    </h2>
                    <Button
                        text="Close"
                        onClick={hideModal}
                        className="mt-5 pt-[14px] pb-[13px]"
                    />
                </>
            ) : (
                <form
                    className="flex flex-col gap-4 w-full"
                    onSubmit={fromSubmit(handleSubmit)}
                >
                    <InputBox
                        {...register('email', { required: true })}
                        type="text"
                        placeholder="Enter your Email"
                        className=""
                        autoComplete="email"
                        error={errors.email?.message}
                    />
                    <Button
                        className="pt-[14px] pb-[13px]"
                        text="Reset"
                        type="submit"
                        disabled={isLoading}
                        isLoader={isLoading}
                    />
                </form>
            )}
        </div>
    );
};

export default ResetPassword;
