import ProgramSection from '@/components/Institute/ProgramSection';
import Ranking from '@/components/Institute/Ranking';
import ScholarshipSection from '@/components/Institute/ScholarshipSection';
import UniversityFacts from '@/components/Institute/UniversityFacts';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { instituteType } from '@/types';
import { GetServerSideProps } from 'next';
import { getSsrRequest } from '@/utils/ssrRequest';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import Link from 'next/link';

const Institutes = ({ data: institute }: { data: instituteType }) => {
    const [showText, setShowText] = useState(false);

    return (
        <>
            <div className="w-full flex justify-center pt-5 md:pt-16 mb-5 md:mb-16 relative overflow-hidden">
                <Image
                    height={80}
                    width={80}
                    alt="uni-round"
                    className="-left-4 md:-left-3 top-1/2 md:top-1/3 absolute h-11 w-11 md:h-14 md:w-14"
                    src="/images/CourseDetail/Circle 3.svg"
                    priority
                />
                <div className="w-full xl:container mx-auto px-4 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 z-10 flex justify-center">
                    <Image
                        height={375}
                        width={1240}
                        alt="institute"
                        src={
                            institute?.image ??
                            '/images/institute/instituteMain.png'
                        }
                        className="w-full rounded-xl max-h-[375px] object-contain"
                        priority
                    />
                </div>
                <Image
                    height={273}
                    width={274}
                    alt="uni-round-2"
                    className="-top-5 md:top-5 absolute -right-12 md:-right-10 h-28 w-28 md:h-40 md:w-40 lg:h-60 lg:w-60"
                    src="/images/CourseDetail/Ciecle 4.svg"
                    priority
                />
            </div>
            <div className="w-full mb-12 lg:mb-32">
                <div className="w-full xl:container mx-auto px-4 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300">
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-8 md:gap-12 w-full lg:w-3/5">
                            <div className="w-full flex justify-between">
                                <div className="flex items-center gap-3">
                                    <Image
                                        height={92}
                                        width={92}
                                        alt="institute"
                                        className="h-10 w-8 md:h-auto md:w-auto"
                                        src={
                                            institute?.logo ??
                                            '/images/institute/university-of-portsmouth.svg'
                                        }
                                        priority
                                    />
                                    <div className="flex flex-col gap-1 md:gap-4">
                                        <h1 className="font-extrabold text-base md:text-3xl text-mainTextColor">
                                            {institute?.name}
                                        </h1>
                                        <p className="text-blueColor text-sm md:text-xl font-semibold">
                                            {institute?.country?.name}
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href={institute.instituteURL}
                                    target="_blank"
                                    className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-full shadow-md group"
                                    title="institute website"
                                >
                                    <FaGlobeAmericas className="h-5 w-5 md:h-7 md:w-7 group-hover:text-blueColor" />
                                </Link>
                            </div>
                            <div className="flex bg-white bg-opacity-10 gap-1 w-full">
                                <p
                                    className={`flex flex-col gap-8 font-medium text-lightGrayColor w-full text-sm md:text-base`}
                                >
                                    {institute?.description.slice(
                                        0,
                                        showText
                                            ? institute?.description.length
                                            : 400
                                    )}
                                    {institute?.description.length > 400 &&
                                        !showText && <>....</>}
                                    {institute?.description.length > 400 && (
                                        <button
                                            onClick={() =>
                                                setShowText((prev) => !prev)
                                            }
                                            className="text-base md:text-xl text-blueColor font-semibold cursor-pointer w-full flex"
                                        >
                                            {showText
                                                ? 'Show Less'
                                                : 'Show More'}
                                        </button>
                                    )}
                                </p>
                            </div>
                            <div className="flex flex-col gap-12 lg:hidden">
                                <UniversityFacts data={institute} />
                                <Ranking data={institute} />
                            </div>
                            <ProgramSection />
                            <ScholarshipSection />
                        </div>
                        <div className="w-1/3 hidden lg:flex flex-col gap-9 h-courseStickyHeight sticky top-[110px] no-scrollbar">
                            <UniversityFacts data={institute} />
                            <Ranking data={institute} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<{
    data: { data: instituteType; status: number };
}> = async (context) => {
    let data = null;
    try {
        const id = `${API_ENDPOINTS.INSTITUTE_BY_ID.replace(
            ':id',
            context.query?.id as string
        )}`;
        data = await getSsrRequest(id, context);
        return { props: { data } };
    } catch (error) {
        return {
            redirect: {
                permanent: false,
                destination: ROUTES.INSTITUTES
            }
        };
    }
};

export default Institutes;
