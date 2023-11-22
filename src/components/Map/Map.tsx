import Image from 'next/image';
import React, { useState } from 'react';

import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { contactUsForm } from '@/types';
import { fetchRequest } from '@/utils/axios/fetch';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import InputBox from '../Input';
import { MdOutlineMail } from 'react-icons/md';
import Button from '../Button';
import { BiUser } from 'react-icons/bi';
import { GiNotebook } from 'react-icons/gi';
import { contactUsFormSchema } from '@/utils/formSchemas';

interface MapProps {
    mapRoundImg: string;
    mapRoundImg2: string;
    mapRoundImg3: string;
    mapRoundImg4: string;
}

const Map = ({
    mapRoundImg,
    mapRoundImg2,
    mapRoundImg3,
    mapRoundImg4
}: MapProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit: fromSubmit,
        formState: { errors },
        reset
    } = useForm<contactUsForm>({ resolver: contactUsFormSchema });

    const handleSubmit = (body: contactUsForm) => {
        setIsLoading(true);
        toast
            .promise(
                fetchRequest({
                    url: API_ENDPOINTS.CONTACT,
                    type: 'post',
                    body
                }),
                {
                    loading: 'loading!...',
                    success: () => {
                        reset();
                        return 'Your Message has been sent';
                    },
                    error: 'an error has occurred'
                }
            )
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="bg-white relative w-full">
            <Image
                height={124}
                width={124}
                alt="map-round-img"
                className="absolute left-[-20px] md:left-0 lg:left-[-20px] 2xl:left-0 top-[-10px] lg:top-[-28px] 2xl:top-0 z-10 h-16 w-16 lg:h-[124px] lg:w-[124px]"
                src={`${mapRoundImg}`}
                priority
            />
            <Image
                height={84}
                width={84}
                alt="map-round-img-2"
                className="absolute right-10 md:right-52 top-0 lg:top-[-28px] 2xl:top-0 z-10 h-11 w-11 lg:h-20 lg:w-20"
                src={`${mapRoundImg2}`}
                priority
            />
            <Image
                height={741}
                width={1160}
                alt="map"
                className="absolute top-0 left-0 w-full h-[841px] object-cover hidden lg:block"
                src="/images/Apply/Map.svg"
                priority
            />
            <Image
                height={841}
                width={1160}
                alt="map"
                className="absolute top-0 left-0 w-full h-[820px] md:h-[851px] object-cover block lg:hidden"
                src="/images/Apply/TabletMobile.svg"
                priority
            />
            <div className="relative w-full flex justify-center md:justify-end px-8 md:pr-20 2xl:pr-40 py-[71px]">
                <form
                    onSubmit={fromSubmit(handleSubmit)}
                    className="bg-white rounded-[10px] px-4 md:px-11 py-7 z-10 mt-0 2xl:mt-[10%] w-full md:w-auto"
                >
                    <h1 className="font-bold text-3xl md:text-[32px] text-mainTextColor">
                        Contact Us
                    </h1>
                    <p className="font-medium text-lg md:text-xl md:text-[23px] mb-4 text-darkGrayColor">
                        Fill out the form below to reach us
                    </p>
                    <div className="flex flex-col gap-y-4 mb-8">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <InputBox
                                {...register('name', {
                                    required: true
                                })}
                                placeholder="Your Name..."
                                title="Name"
                                error={errors.name?.message}
                                icon={BiUser}
                            />
                            <InputBox
                                {...register('subject', {
                                    required: true
                                })}
                                placeholder="Subject..."
                                title="Subject"
                                error={errors.subject?.message}
                                icon={GiNotebook}
                            />
                        </div>
                        <InputBox
                            {...register('email', {
                                required: true
                            })}
                            placeholder="Your Email..."
                            title="Email Address"
                            error={errors.email?.message}
                            icon={MdOutlineMail}
                        />
                        <label
                            className={`text-lg  flex flex-col gap-y-1 ${
                                errors.message?.message
                                    ? 'text-red-600'
                                    : 'text-textLightBlackColor'
                            }`}
                        >
                            Message
                            <textarea
                                {...register('message', {
                                    required: true
                                })}
                                className={`block p-2.5 w-full text-sm md:text-xl bg-gray-50 rounded-lg  resize-none outline-none  ${
                                    errors.message?.message
                                        ? 'text-red-600 border border-red-600'
                                        : 'text-grayColor border border-grayColor focus:ring-blue-500 focus:border-blue-500'
                                }`}
                                placeholder="Write your message..."
                                rows={5}
                            />
                            {errors.message?.message && (
                                <span className="text-xs mt-1 text-red-600 ">
                                    {errors.message?.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <Button
                        text="Send Message"
                        type="submit"
                        isLoader={isLoading}
                        disabled={isLoading}
                    />
                </form>
            </div>
            <Image
                height={66}
                width={66}
                alt="map-round-img-3"
                className="absolute left-[-12px] md:left-[-5px] lg:left-[-11px] 2xl:left-4 top-36 md:top-[322px] 2xl:top-[652px] z-10 h-6 w-6 md:h-9 md:w-9 lg:h-10 lg:w-10"
                src={`${mapRoundImg3}`}
                priority
            />
            <Image
                height={114}
                width={114}
                alt="map-round-img"
                className="absolute left-20 lg:left-[300px] 2xl:left-0 top-[770px] md:top-[790px] lg:top-[750px] 2xl:top-[100%] z-10 h-12 w-12 lg:h-32 lg:w-32"
                src={`${mapRoundImg4}`}
                priority
            />
        </div>
    );
};

export default Map;
