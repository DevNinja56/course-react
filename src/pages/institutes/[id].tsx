import CounselingWork from '@/components/CounselingWork/CounselingWork';
import ProgramSection from '@/components/Institute/ProgramSection';
import Ranking from '@/components/Institute/Ranking';
import ScholarshipSection from '@/components/Institute/ScholarshipSection';
import UniversityFacts from '@/components/Institute/UniversityFacts';
import Testimonial from '@/components/Testimonial';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { instituteType } from '@/types';
import { GetServerSideProps } from 'next';
import { getSsrRequest } from '@/utils/ssrRequest';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';

const Institutes = ({ data: institute }: { data: instituteType }) => {
    const [showText, setShowText] = useState(false);
    console.log({ institute });

    return (
        <>
            <div className="w-full flex justify-center pt-16 mb-16 relative overflow-hidden">
                <Image
                    height={80}
                    width={80}
                    alt="uni-round"
                    className="-left-5 top-1/3 absolute h-20 w-20"
                    src="/images/CourseDetail/Circle 3.svg"
                    priority
                />
                <div className="w-full mx-auto px-0 lg:px-2 2xl:px-8 transition-all duration-300 lg:max-w-[1100px] 2xl:max-w-[2300px] z-10">
                    <Image
                        height={549}
                        width={1240}
                        alt="institute"
                        src="/images/institute/instituteMain.png"
                        priority
                    />
                </div>
                <Image
                    height={273}
                    width={274}
                    alt="uni-round-2"
                    className="top-24 md:top-5 absolute -right-10 h-60 w-60"
                    src="/images/CourseDetail/Ciecle 4.svg"
                    priority
                />
            </div>
            <div className="w-full mb-32">
                <div className="w-full mx-auto px-0 lg:px-2 2xl:px-8 transition-all duration-300 lg:max-w-[1100px] 2xl:max-w-[2300px]">
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-12 w-3/5">
                            <div className="w-full flex justify-between">
                                <div className="flex items-center gap-3">
                                    <Image
                                        height={92}
                                        width={92}
                                        alt="institute"
                                        src={
                                            institute?.logo ??
                                            '/images/institute/university-of-portsmouth.svg'
                                        }
                                        priority
                                    />
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-extrabold text-3xl text-mainTextColor">
                                            {institute?.name}
                                        </h1>
                                        <p className="text-blueColor text-xl font-semibold">
                                            {institute?.country?.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="h-10 w-10 flex items-center justify-center rounded-full shadow-md">
                                    <FaGlobeAmericas className="h-7 w-7" />
                                </div>
                            </div>
                            <div className="flex flex-col bg-white bg-opacity-10 gap-1">
                                <h1
                                    className={`flex flex-col gap-8 font-medium text-lightGrayColor ${
                                        showText
                                            ? 'h-auto overflow-auto'
                                            : 'h-48 overflow-hidden'
                                    }`}
                                >
                                    The University of Portsmouth is the 25th
                                    largest in the UK and dates back to the
                                    opening of the Portsmouth and Gosport School
                                    of Science & Art in 1870. After years as a
                                    Polytechnic, it became a university in 1992
                                    and currently has around 28,000 students.
                                    More than 4,000 of these are international
                                    students from 150 countries around the
                                    world.
                                    <span className="text-opacity-0 bg-white">
                                        It offers a range of disciplines,
                                        including Pharmacy, International
                                        Relations, Mechanical Engineering,
                                        Mathematics, Paleontology, Criminology,
                                        Criminal Justice and Law. The University
                                        of Portsmouth has been ranked as
                                        world-leading or internationally
                                        excellent for its research facilities.
                                    </span>
                                </h1>
                                {showText ? (
                                    ''
                                ) : (
                                    <h1
                                        onClick={() => setShowText(true)}
                                        className="text-xl text-blueColor font-semibold cursor-pointer"
                                    >
                                        Read more
                                    </h1>
                                )}
                            </div>
                            <ProgramSection />
                            <ScholarshipSection />
                        </div>
                        <div className="w-1/3 flex flex-col gap-9">
                            <UniversityFacts />
                            <Ranking />
                        </div>
                    </div>
                </div>
            </div>
            <CounselingWork />
            <Testimonial />
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
