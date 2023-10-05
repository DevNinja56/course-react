import Image from 'next/image';
import React, { useState } from 'react';

const IntrestingForYou = () => {
    const [showStudyProgrammes, setShowStudyProgrammes] =
        useState<boolean>(false);
    const [showScholarships, setShowScholarships] = useState<boolean>(false);
    const [showArticles, setShowArticles] = useState<boolean>(false);

    const onShowStudyProgrammes = () => {
        setShowStudyProgrammes(!showStudyProgrammes);
    };

    const onShowScholarships = () => {
        setShowScholarships(!showScholarships);
    };

    const onShowArticles = () => {
        setShowArticles(!showArticles);
    };

    return (
        <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col w-full lg:w-[26.5%]">
                <div className="flex flex-col gap-y-6">
                    <div className="py-[14px] md:py-[17px] lg:py-[20px] px-[30px] md:px-[50px] lg:pl-0 lg:pr-5 lg:bg-profileBgColor text-blueColor lg:border-t-white lg:border-b-white lg:border-l-white lg:border-r-4 lg:border-blueColor flex justify-between items-center lg:justify-end border md:border-personalInfoBorderColor">
                        <p className="text-base md:text-xl font-semibold">
                            Study programmes
                        </p>
                        <Image
                            onClick={onShowStudyProgrammes}
                            height={20}
                            width={20}
                            alt="img-aroow-down"
                            src="/images/chevron-down.svg"
                            className={`lg:hidden ${
                                showStudyProgrammes ? 'rotate-[-180deg]' : ''
                            }`}
                            priority
                        />
                    </div>
                    {showStudyProgrammes && (
                        <div className="flex lg:hidden flex-col gap-y-3 w-full px-[30px] md:px-[50px] pt-7 pb-12">
                            <p className="py-[14px] text-[32px] font-semibold hidden">
                                Study Programmes
                            </p>
                            <div className="pb-4 grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <Image
                                    height={374.28}
                                    width={245}
                                    alt="study-program-img"
                                    className="rounded-[10px] w-full"
                                    src="/images/profileImages/Coursecard 1 (1).svg"
                                />
                                <Image
                                    height={374.28}
                                    width={245}
                                    alt="study-program-img"
                                    className="rounded-[10px] w-full"
                                    src="/images/profileImages/Coursecard 1 (1).svg"
                                />
                                <Image
                                    height={374.28}
                                    width={245}
                                    alt="study-program-img"
                                    className="rounded-[10px] w-full"
                                    src="/images/profileImages/Coursecard 1 (1).svg"
                                />
                                <Image
                                    height={374.28}
                                    width={245}
                                    alt="study-program-img"
                                    className="rounded-[10px] w-full"
                                    src="/images/profileImages/Coursecard 1 (1).svg"
                                />
                                <Image
                                    height={374.28}
                                    width={245}
                                    alt="study-program-img"
                                    className="rounded-[10px] w-full"
                                    src="/images/profileImages/Coursecard 1 (1).svg"
                                />
                                <Image
                                    height={374.28}
                                    width={245}
                                    alt="study-program-img"
                                    className="rounded-[10px] w-full"
                                    src="/images/profileImages/Coursecard 1 (1).svg"
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="py-[14px] md:py-[17px] lg:py-[20px] px-[30px] md:px-[50px] lg:pl-0 lg:pr-5  lg:text-mainTextColor text-blueColor lg:border-t-white lg:border-b-white lg:border-l-white lg:border-r-4 lg:border-white flex justify-between items-center lg:justify-end border md:border-personalInfoBorderColor">
                        <p className="text-base md:text-xl font-semibold">
                            Scholarships
                        </p>
                        <Image
                            onClick={onShowScholarships}
                            height={20}
                            width={20}
                            alt="img-aroow-down"
                            src="/images/chevron-down.svg"
                            className={`lg:hidden ${
                                showScholarships ? 'rotate-[-180deg]' : ''
                            }`}
                            priority
                        />
                    </div>
                    {showScholarships && ''}
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="py-[14px] md:py-[17px] lg:py-[20px] px-[30px] md:px-[50px] lg:pl-0 lg:pr-5  lg:text-mainTextColor text-blueColor lg:border-t-white lg:border-b-white lg:border-l-white lg:border-r-4 lg:border-white flex justify-between items-center lg:justify-end border md:border-personalInfoBorderColor">
                        <p className="text-base md:text-xl font-semibold">
                            Articles
                        </p>
                        <Image
                            onClick={onShowArticles}
                            height={20}
                            width={20}
                            alt="img-aroow-down"
                            src="/images/chevron-down.svg"
                            className={`lg:hidden ${
                                showArticles ? 'rotate-[-180deg]' : ''
                            }`}
                            priority
                        />
                    </div>
                    {showArticles && ''}
                </div>
            </div>
            <div className="lg:flex flex-col gap-y-3 w-[67%] hidden">
                <p className="py-[14px] text-[32px] font-semibold">
                    Study Programmes
                </p>
                <div className="pb-4 grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Image
                        height={374.28}
                        width={245}
                        alt="study-program-img"
                        className="rounded-[10px] w-full"
                        src="/images/profileImages/Coursecard 1 (1).svg"
                    />
                    <Image
                        height={374.28}
                        width={245}
                        alt="study-program-img"
                        className="rounded-[10px] w-full"
                        src="/images/profileImages/Coursecard 1 (1).svg"
                    />
                    <Image
                        height={374.28}
                        width={245}
                        alt="study-program-img"
                        className="rounded-[10px] w-full"
                        src="/images/profileImages/Coursecard 1 (1).svg"
                    />
                    <Image
                        height={374.28}
                        width={245}
                        alt="study-program-img"
                        className="rounded-[10px] w-full"
                        src="/images/profileImages/Coursecard 1 (1).svg"
                    />
                    <Image
                        height={374.28}
                        width={245}
                        alt="study-program-img"
                        className="rounded-[10px] w-full"
                        src="/images/profileImages/Coursecard 1 (1).svg"
                    />
                    <Image
                        height={374.28}
                        width={245}
                        alt="study-program-img"
                        className="rounded-[10px] w-full"
                        src="/images/profileImages/Coursecard 1 (1).svg"
                    />
                </div>
            </div>
        </div>
    );
};

export default IntrestingForYou;
