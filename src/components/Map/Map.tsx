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
    } = useForm<contactUsForm>();

    console.log(errors);

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
                className="absolute left-[-20px] 2xl:left-0 top-[-28px] 2xl:top-0 z-10"
                src={`${mapRoundImg}`}
                priority
            />
            <Image
                height={84}
                width={84}
                alt="map-round-img-2"
                className="absolute right-52 top-[-28px] 2xl:top-0 z-10"
                src={`${mapRoundImg2}`}
                priority
            />
            <div className="relative w-full flex justify-end pr-20 2xl:pr-40 py-[71px]">
                <Image
                    height={741}
                    width={1160}
                    alt="map"
                    className="absolute top-0 left-0 w-full"
                    src="/images/Apply/Map.svg"
                    priority
                />
                <form
                    onSubmit={fromSubmit(handleSubmit)}
                    className="bg-white rounded-[10px] px-11 py-7 z-10 mt-0 2xl:mt-[10%]"
                >
                    <h1 className="font-bold text-[32px] text-mainTextColor">
                        Contact Us
                    </h1>
                    <p className="font-medium text-[23px] mb-4 text-darkGrayColor">
                        Fill out the form below to reach us
                    </p>
                    <div className="flex flex-col gap-y-4 mb-8">
                        <div className="flex gap-4">
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
                        <label className="text-lg text-textLightBlackColor flex flex-col gap-y-1">
                            Message
                            <textarea
                                {...register('message', {
                                    required: true
                                })}
                                className="block p-2.5 w-full text-xl  bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-none outline-none text-grayColor border border-grayColor "
                                placeholder="Write your message..."
                                rows={5}
                            />
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
                className="absolute left-[-11px] 2xl:left-4 top-[322px] 2xl:top-[652px] z-10"
                src={`${mapRoundImg3}`}
                priority
            />
            <Image
                height={114}
                width={114}
                alt="map-round-img"
                className="absolute left-[300px] 2xl:left-0 top-[630px] 2xl:top-[100%] z-10"
                src={`${mapRoundImg4}`}
                priority
            />
        </div>
    );
};

export default Map;
