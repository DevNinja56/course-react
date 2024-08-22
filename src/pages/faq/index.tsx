import Card from '@/components/ContactUs/Card';
import FAQ from '@/components/FAQ/FAQ';
// import Image from 'next/image';
import React from 'react';

const FAQs = () => {
    return (
        <>
            <div className="w-full mt-[100px] mb-8">
                <FAQ />
            </div>
            <div className="w-full 2xl:mb-[600px] relative">
                <img
                    height={250}
                    width={250}
                    alt="round"
                    className="absolute h-32 w-32 lg:h-[250px] lg:w-[250px] top-[-50px] lg:top-[-100px] right-0 hidden md:block"
                    src="/images/faq/Ellipse 425.svg"
                    // priority
                />
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-5 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 z-10">
                    <div className="w-full custom-shadow rounded-[10px] p-11 mb-24 z-10 bg-white relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px] z-10">
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
        </>
    );
};

export default FAQs;
