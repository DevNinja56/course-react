import React, { useState } from 'react';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { contactUsForm } from '@/types';
import { fetchRequest } from '@/utils/axios/fetch';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '../Button';
import InputBox from './Input';
import { contactUsFormSchema } from '@/utils/formSchemas';

const ContactUsForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit: onSubmit,
        formState: { errors },
        reset
    } = useForm<contactUsForm>({ resolver: contactUsFormSchema });

    const handleFormSubmit = (data: contactUsForm) => {
        setIsLoading(true);
        toast
            .promise(
                fetchRequest({
                    url: API_ENDPOINTS.CONTACT,
                    type: 'post',
                    body: data
                }),
                {
                    loading: 'Sending message...',
                    success: 'Your message has been sent!',
                    error: 'An error occurred. Please try again.'
                }
            )
            .finally(() => {
                setIsLoading(false);
                reset();
            });
    };
    
    return (
        <div className="flex items-center justify-center ">
            <form
                onSubmit={onSubmit(handleFormSubmit)}
                className="w-full max-w-md bg-white shadow-md rounded-xl px-6 py-6 space-y-4"
            >
                <div className='mx-3'>
                    <h1 className="text-lg font-bold text-center text-gray-800">
                        Contact us
                    </h1>
                    <p className="text-center text-gray-500 text-[0.6rem] mb-4">
                        Contact us for your query or suggestion to help us
                        improve.
                    </p>
                </div>
                <div className="space-y-3 mx-3">
                <h1 className="text-sm font-semibold text-gray-800">
                        Get in touch
                    </h1>
                    <div className="flex flex-col md:flex-row gap-3">
                        <InputBox
                            {...register('name', {
                                required: 'Full name is required'
                            })}
                            title="Full Name"
                            error={errors.name?.message}
                        />
                        <InputBox
                            {...register('email', {
                                required: 'Email is required'
                            })}
                            title="Email"
                            error={errors.email?.message}
                        />
                    </div>
                    <InputBox
                        {...register('subject', {
                            required: 'Subject is required'
                        })}
                        title="Subject"
                        error={errors.subject?.message}
                    />
                    <label className="flex flex-col text-gray-500 text-[0.6rem] font-semibold">
                        Message
                        <textarea
                            {...register('message', {
                                required: 'Message is required'
                            })}
                        
                            className={` mt-1 p-2 w-full rounded-md border bg-[#f3f7fd] ${
                                errors.message
                                    ? 'border-red-500'
                                    : 'border-gray500'
                            } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                            placeholder="Write your message..."
                            rows={10}
                        />
                        {errors.message && (
                            <span className="text-xs text-red-500 mt-1">
                                {errors.message.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="mt-4 flex justify-center">
                    <Button
                        text="Send a Message"
                        type="submit"
                        className="!w-fit px-6 py-2 transition-all"
                        isLoader={isLoading}
                    />
                </div>
            </form>
        </div>
    );
};

export default ContactUsForm;
