import ApplicationStatusBox from '@/components/Profile/Application/ApplicationStatusBox';
import Apply from '@/components/Profile/Application/Apply';
import Enroll from '@/components/Profile/Application/Enroll';
import Offer from '@/components/Profile/Application/Offer';
import SubmitDocument from '@/components/Profile/Application/SubmitDocument';
import SuccessfullyEnrolled from '@/components/Profile/Application/SuccessfullyEnrolled';
import Visa from '@/components/Profile/Application/Visa';
import YourCounsellorBox from '@/components/Profile/Application/YourCounsellorBox';
import { useUi } from '@/hooks/user-interface';
import { useGetUserAppliesQuery } from '@/store/slices/allRequests';
import { modalType } from '@/store/slices/ui.slice';
import { applyTypes, statusEnum } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { MdError } from 'react-icons/md';

const UserApplicationDetails = () => {
    const { updateModal } = useUi();
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetUserAppliesQuery();
    const selectedCourse = data?.find((course) => course.id === id);

    const activeStatusField =
        selectedCourse?.status[selectedCourse?.status?.active];

    const isError = activeStatusField?.message_type === 'error';
    const isGeneral = activeStatusField?.message_type === 'general';

    const getStatusTextAndComponent = (
        activeStatus: string,
        selectedCourse: applyTypes
    ) => {
        let statusText = '';
        let statusComponent = null;

        switch (activeStatus) {
            case statusEnum.submitDocuments:
                statusText = 'Submit Documents';
                statusComponent = <SubmitDocument />;
                break;
            case statusEnum.apply:
                statusText = 'Documents Submitted';
                statusComponent = <Apply selectedCourse={selectedCourse} />;
                break;
            case statusEnum.offer:
                statusText = 'Offer Letter';
                statusComponent = <Offer selectedCourse={selectedCourse} />;
                break;
            case statusEnum.visa:
                statusText = 'Visa Detail';
                statusComponent = <Visa selectedCourse={selectedCourse} />;
                break;
            case statusEnum.enroll:
                statusText = 'Enrollment Detail';
                statusComponent = <Enroll selectedCourse={selectedCourse} />;
                break;
            default:
                break;
        }

        return { statusText, statusComponent };
    };

    const { statusText, statusComponent } = getStatusTextAndComponent(
        selectedCourse?.status?.active as string,
        selectedCourse as applyTypes
    );

    return (
        <div className="w-full relative overflow-hidden">
            <Image
                height={60}
                width={60}
                alt="course-round"
                className="top-40 absolute -left-3 md:-left-5 h-8 w-8 md:h-16 md:w-16 lg:h-24 lg:w-24 z-10"
                src="/images/CourseDetail/Circle 3.svg"
                priority
            />
            <Image
                height={273}
                width={274}
                alt="courseDetail-round"
                className="absolute right-[-40px] lg:-right-20 -top-7 md:-top-16 md:-right-8 md:translate-y-8 lg:translate-y-0 md:bottom-8 lg:-top-16 h-20 w-20 md:h-32 md:w-32 lg:h-60 lg:w-60 z-10"
                src="/images/CourseDetail/Ciecle 4.svg"
                priority
            />
            {selectedCourse && (
                <div className="z-20 relative">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-5 w-[92%] max-w-[1240px] mx-auto justify-between pt-4 md:pt-8 lg:pt-12">
                        <YourCounsellorBox selectedCourse={selectedCourse} />
                        <ApplicationStatusBox selectedCourse={selectedCourse} />
                    </div>
                    <div className="max-w-[1240px] mx-auto p-8 py-16">
                        <div className="pb-5">
                            {selectedCourse?.status?.enroll && (
                                <SuccessfullyEnrolled />
                            )}
                        </div>
                        {isError ? (
                            <div className="flex flex-col gap-2 mb-7 md:mb-10 lg:mb-16">
                                <h1 className="flex items-center gap-2 font-bold text-lg md:text-[26px]">
                                    Documents Required
                                    <MdError className="text-redColor" />
                                </h1>
                                <div className="py-2 px-4 rounded-md bg-redColor bg-opacity-10">
                                    <p className="text-base md:text-lg text-redColor">
                                        {activeStatusField?.message}
                                    </p>
                                </div>
                            </div>
                        ) : isGeneral ? (
                            <div className="flex flex-col gap-2 mb-7 md:mb-10 lg:mb-16">
                                <h1 className="flex items-center gap-2 font-bold text-lg md:text-[26px]">
                                    {statusText}
                                </h1>
                                <p className="text-base md:text-lg text-textLightBlackColor">
                                    {activeStatusField?.message}
                                </p>
                            </div>
                        ) : (
                            ''
                        )}
                        {statusComponent}
                        <button
                            onClick={() =>
                                updateModal({
                                    type: modalType.cancel_application,
                                    state: {}
                                })
                            }
                            className=" flex items-center justify-center mx-auto text-redColor border border-redColor py-4 px-9 rounded-md mt-10"
                        >
                            Cancel Application
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
UserApplicationDetails.layout = { auth: true };

export default UserApplicationDetails;
