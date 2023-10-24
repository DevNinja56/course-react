import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const FAQ = () => {
    const router = useRouter();
    return (
        <>
            <div
                className={`w-full flex items-center justify-center h-[200px] ${
                    router.pathname === '/faq' ? 'mb-4' : 'mb-12'
                }`}
            >
                <div className="flex flex-col justify-center items-center">
                    <p className="text-blueColor text-[23px] font-bold">
                        Have a Question?
                    </p>
                    <h1 className="text-mainTextColor text-[48px] font-bold">
                        Read our FAQs
                    </h1>
                </div>
            </div>
            <div className="flex justify-center items-center w-full relative mb-40">
                <div className="w-[880px] flex flex-col border border-grayColor border-opacity-10 rounded relative z-30">
                    {router.pathname === '/faq' ? (
                        <>
                            <Image
                                height={134}
                                width={134}
                                alt="FAQ-Round"
                                className="absolute left-[-200px] top-[180px] z-10"
                                src="/images/Ellipse 424.svg"
                            />
                            <Image
                                height={72}
                                width={72}
                                alt="FAQ-Round"
                                className="absolute top-[-35px] right-[-30px] z-[-1]"
                                src="/images/Ellipse 426.png"
                            />
                        </>
                    ) : (
                        <Image
                            height={296}
                            width={296}
                            alt="FAQ-Round"
                            className="absolute left-[-140px] top-[-140px] h-[296px] w-[296px] z-10"
                            src="/images/elipse.png"
                        />
                    )}
                    <div className="flex text-[16px] px-[30px] py-[25.5px] font-bold h-[72px] w-full items-center justify-between border-b border-grayColor border-opacity-10 bg-white z-30">
                        <p>How does it work?</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 5V19M5 12H19"
                                stroke="#717070"
                                strokeOpacity="0.5"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="flex text-[16px] px-[30px] py-[25.5px] font-bold h-[72px] w-full items-center justify-between border-b border-grayColor border-opacity-10 bg-white z-30">
                        <p>What`&lsquo;`s included with membership?</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 5V19M5 12H19"
                                stroke="#717070"
                                strokeOpacity="0.5"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="flex text-[16px] px-[30px] py-[25.5px] font-bold h-[72px] w-full items-center justify-between border-b border-grayColor border-opacity-10 bg-white z-30">
                        <p>All the free API services really unlimited?</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 5V19M5 12H19"
                                stroke="#717070"
                                strokeOpacity="0.5"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="flex text-[16px] px-[30px] py-[25.5px] font-bold h-[72px] w-full items-center justify-between border-b border-grayColor border-opacity-10 bg-white z-30">
                        <p>All the free API services really unlimited?</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 5V19M5 12H19"
                                stroke="#717070"
                                strokeOpacity="0.5"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="flex text-[16px] px-[30px] py-[25.5px] font-bold h-[72px] w-full items-center justify-between border-b border-grayColor border-opacity-10 bg-white z-30">
                        <p>Can I sign up for dedicated support?</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 5V19M5 12H19"
                                stroke="#717070"
                                strokeOpacity="0.5"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="flex text-[16px] px-[30px] py-[25.5px] font-bold h-[72px] w-full items-center justify-between">
                        <p>How do I upgrade my account?</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 5V19M5 12H19"
                                stroke="#717070"
                                strokeOpacity="0.5"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;
