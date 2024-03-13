import React, { useState } from 'react';
import { useUi } from '@/hooks/user-interface';
import { GrFormClose } from 'react-icons/gr';
import InputBox from '@/components/Input';
import Button from '@/components/Button';
import { useForm } from 'react-hook-form';
import { changePasswordForm } from '@/types';
import { fetchRequest } from '@/utils/axios/fetch';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { changePasswordFormSchema } from '@/utils/formSchemas';
import toast from 'react-hot-toast';
import { useUserAuth } from '@/hooks/auth';

const ChangePassword = () => {
    const { hideModal } = useUi();
    const { user } = useUserAuth();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit: fromSubmit,
        formState: { errors }
    } = useForm<changePasswordForm>({ resolver: changePasswordFormSchema });

    const handleSubmit = (body: changePasswordForm) => {
        setIsLoading(true);
        if (user.status == 'block') {
            toast.error('You cannot change password');
        } else {
            fetchRequest({
                url: API_ENDPOINTS.USER.CHANGE_PASSWORD,
                type: 'post',
                body
            })
                .then(() => toast.success('Password updated successfully'))
                .catch((err) => toast.error(err.response.data.message))
                .finally(() => {
                    setIsLoading(false);
                    hideModal();
                });
        }
    };

    return (
        <div className="bg-white p-10 border-4 border-[#CCCCCC] rounded-lg relative ">
            <GrFormClose
                onClick={hideModal}
                className="absolute top-3 right-3 cursor-pointer text-xl"
            />
            <h1 className="text-mainTextColor font-bold text-[36px] mb-5">
                Change Password
            </h1>
            <form
                className="flex flex-col gap-3"
                onSubmit={fromSubmit(handleSubmit)}
            >
                <InputBox
                    {...register('password', {
                        required: true
                    })}
                    type="password"
                    placeholder="Current Password"
                    error={errors.password?.message}
                />
                <InputBox
                    {...register('new_password', {
                        required: true
                    })}
                    type="password"
                    placeholder="New Password"
                    error={errors.new_password?.message}
                />
                <InputBox
                    {...register('confirm_password', {
                        required: true
                    })}
                    type="password"
                    placeholder="Confirm Password"
                    error={errors.confirm_password?.message}
                />
                <Button
                    className="pt-[14px] pb-[13px]"
                    text="Change Password"
                    type="submit"
                    disabled={isLoading}
                    isLoader={isLoading}
                />
            </form>
        </div>
    );
};

export default ChangePassword;
