import QualificationSection from '@/components/Ucas/QualificationSection';
import Image from 'next/image';
import React from 'react';

const UCAS = () => {
    return (
        <>
            <div className="w-full flex items-center justify-between h-[214px] mt-[90px] bg-profileBgColor mb-16">
                <Image
                    height={193}
                    width={193}
                    alt="fields-round"
                    className="mt-[-190px] md:mt-[-150px] ml-[-20px] lg:ml-[-4px] h-[89px] w-[91px] md:w-[129px] md:h-[126px] lg:h-[193px] lg:w-[193px]"
                    src="/images/profileImages/Ellipse 418.svg"
                    priority
                />
                <div className="flex flex-col items-center">
                    <h1 className="text-mainTextColor text-[36px] md:text-[48px] font-bold">
                        Calculate your UCAS Tariff points
                    </h1>
                    <p className="text-blueColor font-bold text-lg md:text-[23px] text-center">
                        Explore this section
                    </p>
                </div>
                <Image
                    height={235}
                    width={100}
                    alt="fields-round-2"
                    className="mt-[207px] hidden lg:block"
                    src="/images/Fields/Frame 691.svg"
                    priority
                />
                <Image
                    height={154}
                    width={109}
                    alt="fields-round-2"
                    className="mt-[207px] hidden md:block lg:hidden"
                    src="/images/Fields/Frame 866.svg"
                    priority
                />
                <Image
                    height={124}
                    width={56}
                    alt="fields-round-2"
                    className="mt-[207px] block md:hidden lg:hidden"
                    src="/images/Fields/Frame 910.svg"
                    priority
                />
            </div>
            <div className="flex flex-col gap-5 container mx-auto">
                <h2 className="font-bold text-4xl">
                    Before you use the Tariff Calculator
                </h2>
                <ul className="text-gray-500 flex flex-col gap-3 text-lg list-disc pl-4 mb-10">
                    <li>
                        Not all qualifications are included in the Tariff, so
                        don&apos;t worry if you can&apos;t find your
                        qualification in this calculator - make sure you{' '}
                        <span className="text-blue-700 cursor-pointer opacity-70 hover:text-red-500 transition-all duration-300">
                            check the entry requirements in our search tool
                        </span>{' '}
                        for the courses you&apos;re interested in.
                    </li>
                    <li>
                        Universities and colleges set their own entry
                        requirements and do not have to accept a qualification
                        simply because it is included in the Tariff tables.
                    </li>
                    <li>
                        Universities and colleges don&apos;t have to accept the
                        Tariff value assigned by UCAS either. For example, if a
                        university feels the content of the qualification is not
                        fully relevant for the course you are applying to, they
                        may tell you it&apos;s worth fewer points than UCAS has
                        suggested, although most of the time the full Tariff
                        points will be accepted.
                    </li>
                    <li>
                        The best advice is to check the entry requirements
                        listed in UCAS&apos; search tool, or with the course
                        provider, to find out if your qualifications are
                        accepted.
                    </li>
                    <li>
                        UCAS Tariff points only apply to Level 3/SCQF Level 6
                        qualifications, not Level 2 qualifications such as
                        GCSEs. This calculator covers Level 3 UK qualifications
                        regulated by Ofqual, Qualifications in Wales, CCEA and
                        QAA, as well as SCQF Level 6 qualifications accredited
                        by SQA and SCQF.
                    </li>
                </ul>
                <QualificationSection />
            </div>
        </>
    );
};

export default UCAS;
