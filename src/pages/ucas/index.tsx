import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import QualificationSection from '@/components/Ucas/QualificationSection';
import Button from '@/components/Button';
import { Qualification } from '@/types';
import UcasPointCalculate from '@/Modal/UcasPointCalculate';

const UCAS = () => {
    const [qualifications, setQualifications] = useState<Qualification[]>([
        { id: Date.now() }
    ]);
    const [totalScore, setTotalScore] = useState<number>(0);
    const [isCalculate, setIsCalculate] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(true);

    const formRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isCalculate && formRef.current) {
            formRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [isCalculate]);

    return (
        <>
            {modalOpen && (
                <UcasPointCalculate
                    qualifications={qualifications}
                    setQualifications={setQualifications}
                    setTotalScore={setTotalScore}
                    setIsCalculate={setIsCalculate}
                    setModalOpen={setModalOpen}
                />
            )}
            <div className="w-full flex items-center justify-between h-[214px] mt-12 md:mt-[90px] bg-profileBgColor mb-16">
                <Image
                    height={193}
                    width={193}
                    alt="fields-round"
                    className="mt-[-190px] md:mt-[-150px] ml-[-20px] lg:ml-[-4px] h-[89px] w-[91px] md:w-[129px] md:h-[126px] lg:h-[193px] lg:w-[193px]"
                    src="/images/profileImages/Ellipse 418.svg"
                    priority
                />
                <h1 className="text-mainTextColor text-2xl md:text-[36px] lg:text-5xl xl:text-[48px] font-bold text-center">
                    Calculate your UCAS Tariff Points
                </h1>
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
            <div className="w-11/12 mx-auto mb-5 flex items-start justify-between">
                <div className="w-full lg:w-8/12 flex flex-col gap-5">
                    <h2 className="font-bold text-2xl md:text-4xl">
                        UCAS Points Calculator
                    </h2>
                    <div
                        ref={formRef}
                        className="text-gray-500 flex flex-col gap-3 text-sm md:text-lg mb-10"
                    >
                        <li>
                            Please use this{' '}
                            <span className="font-bold text-black">
                                UCAS Points Calculator
                            </span>{' '}
                            to calculate your UCAS Tariff Points. Your UCAS
                            points score allows you to make broad comparisons
                            across a wide range of universities and colleges to
                            find the best courses for your qualifications and
                            grades.
                        </li>
                        <li>
                            If you are wondering &quot;how many UCAS points do I
                            have&quot;, then please enter your qualifications
                            below and we&apos;ll calculate your points for you.
                            When applying for specific courses, please use the
                            UCAS points converter as a general guide and always
                            check the specific requirements of that course.
                        </li>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h1 className="font-bold text-xl md:text-3xl">
                            Qualifications
                        </h1>
                        {qualifications.map((qualification) => (
                            <QualificationSection
                                key={'qualification --' + qualification.id}
                                qualification={qualification}
                                qualifications={qualifications}
                                setQualifications={setQualifications}
                                setTotalScore={setTotalScore}
                            />
                        ))}
                        <div className="border-t pt-5 flex flex-col-reverse md:flex-row items-start gap-5 md:gap-0 md:items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Button
                                    onClick={() =>
                                        setQualifications((prev) => [
                                            ...prev,
                                            { id: Date.now() }
                                        ])
                                    }
                                    text="+ Add Qualification"
                                    className="py-2 px-2 md:px-3 text-xs md:text-sm rounded-[100em] min-w-fit"
                                />
                                <Button
                                    onClick={() => {
                                        setQualifications([{ id: Date.now() }]);
                                        setTotalScore(0);
                                    }}
                                    text="Clear All"
                                    className="py-2 px-2 md:px-3 text-xs md:text-sm rounded-[100em]"
                                />
                            </div>
                            <div className="flex flex-col items-center font-bold text-base md:text-xl">
                                Total Points:
                                <span className="text-xl md:text-3xl">
                                    {totalScore}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    height={400}
                    width={400}
                    alt="calculator"
                    src="/images/UCAS/calculator.svg"
                    priority
                />
            </div>
        </>
    );
};

export default UCAS;
