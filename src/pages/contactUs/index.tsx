import SmartMatchBanner from '@/components/AboutUs/SmartMatchBanner';
import ContactUsForm from '@/components/ContactUs/Form';
import Card from '@/components/ContactUs/Card';
import React from 'react';

const ContactUs = () => {
    return (
        <div className="2xl:m-auto 2xl:container overflow-hidden">
            <div className="bg-[#2b79ff] w-full flex flex-col lg:flex-row h-auto lg:h-96">
                <div className="flex flex-col lg:flex-row justify-center w-full items-center gap-10 lg:gap-32 p-5">
                    <div className="relative flex-[0.7] text-center md:text-left">
                        <img
                            src="/images/ContactUs/CONTACT.png"
                            alt="CONTACT"
                            className="absolute inset-0 z-0 h-16 md:h-[6.5rem] object-contain mx-auto md:mx-0"
                        />
                        <div className="text-white text-3xl md:text-5xl font-bold mb-2 z-10 relative mt-10 md:top-2 flex flex-col gap-3 md:gap-2 left-5 text-left">
                            <h1>
                                Let’s talk about <br />
                                your future.
                            </h1>
                            <p className="text-lg md:text-xl">
                                Start your journey with a helping hand.
                            </p>
                        </div>
                    </div>
                    <div className="relative lg:top-32 w-full md:w-auto z-30">
                        <ContactUsForm />
                    </div>
                </div>
            </div>
            <div className="relative text-center md:text-left p-5 md:p-0">
                <div className="w-full lg:w-2/5 pb-10 text-center lg:text-left lg:pb-36 pt-10 mx-auto lg:mx-32 text-sm">
                    <p>
                        If you need more specific advice, one of our expert
                        counsellors will be happy to help you. Email us:
                    </p>
                    <p className="font-bold">admin@courseoptions.com</p>
                </div>
                <img
                    src="/images/elipse.png"
                    alt="elipse"
                    className="absolute top-20 -right-10   h-36 md:block hidden"
                />
            </div>

            {/* Uncomment and adjust layout for additional sections as needed */}
            {/*
            <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto transition-all duration-300 px-5 md:px-[50px] lg:px-2 2xl:px-8 mb-32 lg:mb-52">
                <Map
                    mapRoundImg="/images/Ellipse 424.svg"
                    mapRoundImg2="/images/Ellipse 426.svg"
                    mapRoundImg3="/images/Ellipse 425.svg"
                    mapRoundImg4="/images/Ellipse 427.svg"
                />
            </div>
            <div className="w-full 2xl:mb-[600px]">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-5 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300">
                    <div className="w-full custom-shadow rounded-[10px] p-8 md:p-11 mb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            */}
            <div className="bg-profileBgColor pt-12 pb-14 flex flex-col gap-7 relative justify-center items-center">
                <h1 className="text-[#2563EB] font-bold text-4xl text-center py-2 ">
                    Contact Info
                </h1>
                <div className="flex gap-10 justify-center flex-col lg:flex-row  ">
                    <Card
                        img="/images/ContactUs/Email.svg"
                        title="Email us"
                        detail="admin@courseoptions.com"
                        description="Email us for general queries, including marketing and partnership opportunities."
                    />
                    <Card
                        img="/images/ContactUs/Call.svg"
                        title="Call us"
                        detail="+1 (646) 786-5060"
                        description="Call us to speak to a member of our team. We are always happy to help."
                    />
                    <Card
                        img="/images/ContactUs/Support.svg"
                        title="Support"
                        detail="contact@info.com"
                        description="Talk to our support center. 
Live chat now"
                        maxWidth="max-w-[50%]"
                    />
                </div>
                <img
                    src="/images/elipse.png"
                    alt="elipse"
                    className="absolute -bottom-24 lg:bottom-1 -left-16   h-36 md:block hidden"
                />
            </div>
            <SmartMatchBanner />
        </div>
    );
};

export default ContactUs;
