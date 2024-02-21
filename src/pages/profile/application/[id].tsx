import StepsProgressBar from '@/components/StepsProgressBar';
import RequirementBox from '@/components/course/RequirementBox';
import { useUi } from '@/hooks/user-interface';
import { useGetUserAppliesQuery } from '@/store/slices/allRequests';
import { modalType } from '@/store/slices/ui.slice';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const UserApplicationDetails = () => {
    const { updateModal } = useUi();
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetUserAppliesQuery();
    const selectedCourse = data?.find((course) => course.id === id);

    return (
        <>
            <div className="w-[92%] max-w-[1240px] mx-auto p-8 rounded-[30px] shadow-progressBarShadow ">
                <h1 className="text-2xl font-bold text-mainTextColor gap-6">
                    {selectedCourse?.course.name}
                </h1>
                <div className="py-3 flex items-center text-lg font-medium text-darkGrayColor gap-10 ">
                    <p className="text-sm md:text-base">
                        {selectedCourse?.course.degree.type}
                    </p>

                    <p className=" text-sm md:text-base relative before:block before:content-[''] before:w-2 before:h-2 before:bg-black before:rounded-full before:absolute before:-left-6 before:top-[50%] before:-translate-y-1/2">
                        {selectedCourse?.course.specialization.name}
                    </p>
                    <p className="text-sm md:text-base relative before:block before:content-[''] before:w-2 before:h-2 before:bg-black before:rounded-full before:absolute before:-left-6 before:top-[50%] before:-translate-y-1/2">
                        January 2025
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Image
                        width={20}
                        className="w-8 h-8 rounded-[5px]"
                        src={selectedCourse?.course?.institute?.logo ?? ''}
                        alt=""
                    />
                    <div className="flex flex-col ">
                        <span className="text-base font-bold text-mainTextColor">
                            {selectedCourse?.course?.institute?.name}
                        </span>
                        <span className="text-darkGrayColor text-base">
                            {selectedCourse?.course?.institute?.campus}
                        </span>
                    </div>
                </div>

                <StepsProgressBar status={selectedCourse?.status} />
            </div>
            <div className="max-w-[1240px] mx-auto p-8">
                <div className="w-full md:w-1/2 py-16 ">
                    <p className="text-[26px] font-bold text-mainTextColor">
                        Submit Documents
                    </p>
                    <p className="text-2xl font-semibold uppercase text-darkGrayColor py-3">
                        Identity
                    </p>
                    <RequirementBox url="" text="Passport" />
                </div>
                <div className="w-full">
                    <p className="text-[26px] font-bold text-mainTextColor pt-12 pb-3">
                        Academic Certificates
                    </p>
                    <p className="text-2xl font-semibold uppercase text-darkGrayColor py-3">
                        UNDERGRADUATE
                    </p>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                        <RequirementBox text="Semester Marksheets" url="" />
                        <RequirementBox text="Consolidated Marksheets" url="" />
                        <RequirementBox text="Provisional Certificate" url="" />
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-[26px] font-bold text-mainTextColor pt-12 pb-7">
                        Professional Records
                    </p>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                        <RequirementBox text="Experience Letter" url="" />
                        <RequirementBox text="CV/Resume" url="" />
                        <RequirementBox text="Personal Statement" url="" />
                        <RequirementBox text="Letter of Reference" url="" />
                    </div>
                </div>

                <button
                    onClick={() =>
                        updateModal({
                            type: modalType.cancel_application,
                            state: {}
                        })
                    }
                    className=" flex items-center justify-center mx-auto my-24 text-redColor border border-redColor py-4 px-9 rounded-md"
                >
                    Cancel Application
                </button>
            </div>
        </>
    );
};
UserApplicationDetails.layout = { auth: true };

export default UserApplicationDetails;
