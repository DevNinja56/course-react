// import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { accordionList } from '@/utils/data/accordion';
import dynamic from 'next/dynamic';
const Accordion = dynamic(() => import('../Accordion'), { ssr: false });

const FAQ = () => {
    const [accordion, setAccordion] = useState<number | null>(null);
    const router = useRouter();

    return (
        <>
            <div
                className={`w-full flex items-center justify-center ${router.pathname === '/faq' ?  "h-[200px]" : "pb-10"} `}
            >
                <div className="flex flex-col gap-4 justify-center items-center ">
                    <p className="text-blueColor text-xl md:text-[23px] font-bold">
                        Have a Question?
                    </p>
                    <h1 className="text-mainTextColor text-4xl md:text-[48px] font-bold">
                        Read our FAQs
                    </h1>
                </div>
            </div>
            <div className={`flex justify-center items-center w-full relative ${router.pathname === '/faq' && "mb-28"} px-5 md:px-[50px] lg:px-2 2xl:px-8`}>
                <div className="w-[880px] flex flex-col border border-grayColor border-opacity-10 rounded relative z-30">
                    {router.pathname === '/faq' || router.pathname === '/smart-match' ? (
                        <>
                            <img
                                height={134}
                                width={134}
                                alt="FAQ-Round"
                                className="absolute left-[-50px] lg:left-[-80px] xl:left-[-200px] bottom-[-50px] md:top-60 lg:top-[180px] z-10 h-24 w-24 lg:h-36 lg:w-36"
                                src="/images/Ellipse 424.svg"
                            />
                            <img
                                height={72}
                                width={72}
                                alt="FAQ-Round"
                                className="absolute top-[-35px] right-[-30px] z-[-1] h-16 w-16 md:h-[72px] md:w-[72px] hidden md:block"
                                src="/images/Ellipse 426.png"
                            />
                            <div className="h-11 w-11 border-[10px] border-blueColor rounded-full absolute top-[-25px] md:top-[-35px] right-[-20px] md:right-[-30px] block md:hidden"></div>
                        </>
                    ) : (
                        <img
                            height={296}
                            width={296}
                            alt="FAQ-Round"
                            className="absolute left-[-90px] lg:left-[-140px] top-[-70px] lg:top-[-140px] h-32 w-32 md:h-40 md:w-40 lg:h-[296px] lg:w-[296px] z-10"
                            src="/images/elipse.png"
                        />
                    )}
                    {accordionList?.map(({ title, content }, i) => (
                        <Accordion
                            key={'accordion--key-' + i}
                            isActive={accordion === i}
                            title={title}
                            content={content}
                            activeFun={() =>
                                setAccordion((prev) => (prev === i ? null : i))
                            }
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FAQ;
