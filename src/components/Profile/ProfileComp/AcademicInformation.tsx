import React from 'react';
import { modalType } from '@/store/slices/ui.slice';
import { FiEdit } from 'react-icons/fi';
import { useUi } from '@/hooks/user-interface';
import { useUserAuth } from '@/hooks/auth';

const AcademicInformation = () => {
    const { updateModal } = useUi();
    const { academicInformation } = useUserAuth()?.user ?? {};

    const {
        countryOfEducation = 'Null',
        highestLevelOfEducation = 'Null',
        languageTest = {}
    } = academicInformation ?? {};

    const { name: languageTestName, score: languageTestScore } =
        languageTest as { name: string; score: { [key: string]: string } };
    const { speaking, listening, writing, reading } = languageTestScore ?? {};
    const overallScore = (+speaking + +listening + +writing + +reading) / 4;
    return (
        <div className="lg:flex flex-col w-full lg:w-[67%] ">
            <div className="rounded-[10px] border border-borderColor px-11 pt-11 pb-4 flex flex-col gap-y-6 relative ">
                <button
                    className="absolute top-2 right-3 p-5 "
                    onClick={() =>
                        updateModal({
                            type: modalType.update_academic_info,
                            state: {}
                        })
                    }
                >
                    <FiEdit />
                </button>
                <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                    <p>Country of education</p>
                    <h1 className="text-xl font-semibold">
                        {countryOfEducation ?? 'Null'}
                    </h1>
                </div>
                <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                    <p>Highest level of education</p>
                    <h1 className="text-xl font-semibold">
                        {highestLevelOfEducation ??
                            'HSSE, A Levels, DAE, 2 Years Bachelors Degree, 4 Years Bachelors Degree, Masters degree'}
                    </h1>
                </div>
                <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                    <p>English Language Test</p>
                    <h1 className="text-xl font-semibold">
                        {languageTestName ?? "I don't have any test"}
                    </h1>
                    {languageTestScore && (
                        <div className="score">
                            <div className="flex flex-wrap gap-2">
                                <span className="">
                                    Speaking: <b>{(+speaking)?.toFixed(1) ?? 'Null'}</b>
                                </span>
                                <span className="">
                                    Listening: <b>{(+listening)?.toFixed(1) ?? 'Null'}</b>
                                </span>
                                <span className="">
                                    Writing: <b>{(+writing)?.toFixed(1) ?? 'Null'}</b>
                                </span>
                                <span className="">
                                    Reading: <b>{(+reading)?.toFixed(1) ?? 'Null'}</b>
                                </span>
                                <span className="">
                                    Overall: <b>{(+overallScore)?.toFixed(1) ?? 'Null'}</b>
                                </span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="pb-5 flex flex-col gap-y-2 text-mainTextColor">
                    <p>Upload Documents</p>
                    <h1 className="text-xl font-semibold">
                        {
                            'Identity Documents, Academic Documents, English Language Test Docs, Other Documents'
                        }
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default AcademicInformation;
