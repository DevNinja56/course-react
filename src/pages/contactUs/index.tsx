import Card from '@/components/ContactUs/Card';
import FAQ from '@/components/FAQ/FAQ';
import Map from '@/components/Map/Map';
import Testimonal from '@/components/Testimonal/Testimonal';
import React from 'react';

const ContactUs = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center h-[200px] mt-[100px] mb-5 z-0">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-blueColor text-[23px] font-bold">
                        Reach Out
                    </p>
                    <h1 className="text-mainTextColor text-[48px] font-bold">
                        Contact Us
                    </h1>
                </div>
            </div>
            <div
                className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto
transition-all duration-300 px-2 mb-16"
            >
                <Map
                    mapRoundImg="/images/Ellipse 424.svg"
                    mapRoundImg2="/images/Ellipse 426.svg"
                    mapRoundImg3="/images/Ellipse 425.svg"
                    mapRoundImg4="/images/Ellipse 427.svg"
                />
            </div>
            <div className="w-full 2xl:mb-[600px]">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300">
                    <div className="w-full custom-shadow rounded-[10px] p-11 mb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px]">
                            <Card
                                img="/images/Apply/emailaddress.svg"
                                title="Email"
                                detail="contact@info.com"
                            />
                            <Card
                                img="/images/Apply/phone.svg"
                                title="Phone"
                                detail="+1 44 598-5598"
                            />
                            <Card
                                img="/images/Apply/location.svg"
                                title="Location"
                                detail="28, Baker Street, Los Angeles, CA"
                            />
                            <Card
                                img="/images/Apply/chat.svg"
                                title="Live Chat"
                                detail="https://support.xyz.io"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <FAQ />
            <Testimonal />
        </>
    );
};

export default ContactUs;
