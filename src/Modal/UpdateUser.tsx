import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useUi } from '@/hooks/user-interface';
import InputBox from '@/components/Input';
import Button from '@/components/Button';
import { useForm } from 'react-hook-form';
import { userType } from '@/types';
import { useUserAuth } from '@/hooks/auth';
import toast from 'react-hot-toast';
import { fetchRequest } from '@/utils/axios/fetch';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';

const UpdateUserInfo = () => {
    const { hideModal } = useUi();
    const { user, refetchUser } = useUserAuth();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit: fromSubmit,
        formState: { errors }
    } = useForm<userType>({ defaultValues: user });

    const handleSubmit = (body: userType) => {
        setIsLoading(true);
        toast
            .promise(
                fetchRequest({
                    url: API_ENDPOINTS.USER.UPDATE_PROFILE.replace(
                        ':id',
                        user.id
                    ),
                    type: 'patch',
                    body
                }),
                {
                    loading: 'Loading...',
                    success: () => {
                        refetchUser();
                        hideModal();
                        return 'User updated successfully';
                    },
                    error: 'An error accord'
                }
            )
            .finally(() => setIsLoading(false));
    };

    return (
        <div
            className="bg-white modal relative border-[3px] border-[#CCCCCC] p-10 rounded-xl "
            style={{ width: '450px' }}
        >
            <IoMdClose
                className="absolute top-3 right-3 cursor-pointer"
                onClick={hideModal}
            />

            <h1 className="text-mainTextColor text-center font-bold text-[36px] mb-5">
                Update Profile
            </h1>

            <form
                className="flex flex-col gap-3 "
                onSubmit={fromSubmit(handleSubmit)}
            >
                <InputBox
                    {...register('name', {
                        required: true
                    })}
                    placeholder="Name"
                    title="Username"
                    error={errors.name?.message}
                    // icon={MdOutlineMai}
                />
                <InputBox
                    {...register('email', {
                        required: true
                    })}
                    placeholder="Email"
                    title="Email"
                    error={errors.email?.message}
                    disabled
                />
                <InputBox
                    {...register('phone_number', {
                        required: false
                    })}
                    placeholder="Phone Number"
                    title="Phone Number"
                    error={errors.phone_number?.message}
                />
                <InputBox
                    {...register('address', {
                        required: true
                    })}
                    placeholder="Address"
                    title="Address"
                    error={errors.address?.message}
                />
                <Button
                    text="Update"
                    type="submit"
                    className="mt-5 pt-[14px] pb-[13px]"
                    isLoader={isLoading}
                    disabled={isLoading}
                />
            </form>
        </div>
    );
};

export default UpdateUserInfo;
