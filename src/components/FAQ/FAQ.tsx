import Image from 'next/image';
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
