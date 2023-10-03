import Image from 'next/image';
import React from 'react';

const Map = () => {
    return (
        <div className="bg-white relative w-full">
            <Image
                height={124}
                width={124}
                alt="map-round-img"
                className="absolute left-[-20px] 2xl:left-0 top-[-28px] 2xl:top-0 z-10"
                src="/images/Apply/mapRoundImg1.svg"
                priority
            />
            <Image
                height={84}
                width={84}
                alt="map-round-img-2"
                className="absolute right-52 top-[-28px] 2xl:top-0 z-10"
                src="/images/Apply/mapRoundImg2.svg"
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
                <div className="bg-white rounded-[10px] px-11 py-7 z-10 mt-0 2xl:mt-[10%]">
                    <h1 className="font-bold text-[32px] text-mainTextColor">
                        Contact Us
                    </h1>
                    <p className="font-medium text-[23px] mb-4 text-darkGrayColor">
                        Fill out the form below to reach us
                    </p>
                    <form className="flex flex-col gap-y-4 mb-8">
                        <div className="flex gap-4">
                            <label className="text-lg text-textLightBlackColor flex flex-col gap-y-1">
                                First Name
                                <div className="relative">
                                    <input
                                        className="rounded-[10px] pt-[10px] pb-[9px] pl-[50px] pr-[10px] gap-[10px] text-sm text-grayColor border border-grayColor outline-none"
                                        placeholder="Your First Name..."
                                    />
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="user"
                                        className="absolute top-[11px] left-5"
                                        src="/images/Apply/user (1).svg"
                                        priority
                                    />
                                </div>
                            </label>
                            <label className="text-lg text-textLightBlackColor flex flex-col gap-y-1">
                                Last Name
                                <div className="relative">
                                    <input
                                        className="rounded-[10px] pt-[10px] pb-[9px] pl-[50px] pr-[10px] gap-[10px] text-sm text-grayColor border border-grayColor outline-none"
                                        placeholder="Your Last Name..."
                                    />
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="user"
                                        className="absolute top-[11px] left-5"
                                        src="/images/Apply/user (1).svg"
                                        priority
                                    />
                                </div>
                            </label>
                        </div>
                        <label className="text-lg text-textLightBlackColor flex flex-col gap-y-1">
                            Email Address
                            <div className="relative">
                                <input
                                    className="rounded-[10px] pt-[10px] pb-[9px] pl-[50px] w-full gap-[10px] text-sm text-grayColor border border-grayColor outline-none"
                                    placeholder="Your Email Address..."
                                />
                                <Image
                                    height={20}
                                    width={20}
                                    alt="mail"
                                    className="absolute top-[11px] left-5"
                                    src="/images/Apply/mail.svg"
                                    priority
                                />
                            </div>
                        </label>
                        <label className="text-lg text-textLightBlackColor flex flex-col gap-y-1">
                            Message
                            <input
                                className="rounded-[10px] pt-5 pb-[87px] pl-5 w-full gap-[10px] text-sm text-grayColor border border-grayColor outline-none"
                                placeholder="Write your message..."
                            />
                        </label>
                    </form>
                    <a href="../SignIn">
                        <button className="w-full pt-[14px] pb-[13px] rounded-[10px] bg-blueColor text-white">
                            Send Message
                        </button>
                    </a>
                </div>
            </div>
            <Image
                height={66}
                width={66}
                alt="map-round-img-3"
                className="absolute left-[-11px] 2xl:left-4 top-[322px] 2xl:top-[652px] z-10"
                src="/images/Apply/mapRoundImg3.svg"
                priority
            />
            <Image
                height={114}
                width={114}
                alt="map-round-img"
                className="absolute left-[300px] 2xl:left-0 top-[630px] 2xl:top-[100%] z-10"
                src="/images/Apply/mapRoundImg4.svg"
                priority
            />
        </div>
    );
};

export default Map;
