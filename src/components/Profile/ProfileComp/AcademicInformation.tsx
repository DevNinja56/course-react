import React from 'react';
import { modalType } from '@/store/slices/ui.slice';
import { FiEdit } from 'react-icons/fi';
import { useUi } from '@/hooks/user-interface';
import { useUserAuth } from '@/hooks/auth';
import Link from 'next/link';

const AcademicInformation = () => {
    const { updateModal } = useUi();
    const { academicInformation, documents } = useUserAuth()?.user ?? {};
    const {
        countryOfEducation = 'Null',
        highestLevelOfEducation = 'Null',
        languageTest = {}
    } = academicInformation ?? {};

    const { name: languageTestName, score: languageTestScore } =
        languageTest as { name: string; score: { [key: string]: string } };
    const { speaking, listening, writing, reading, overAll } =
        languageTestScore ?? {};
    // const overallScore = (+speaking + +listening + +writing + +reading) / 4;
    return (
        <div className="lg:flex flex-col w-full lg:w-[67%]">
            <div className="rounded-[10px] border border-white lg:border-borderColor px-10 md:px-12 lg:px-11 pt-0 md:pt-8 lg:pt-11 pb-8 lg:pb-4 flex flex-col gap-y-6 relative ">
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
                    <h1 className="text-base md:text-xl font-semibold">
                        {countryOfEducation ?? 'Null'}
                    </h1>
                </div>
                <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                    <p>Highest level of education</p>
                    <h1 className="text-base md:text-xl font-semibold">
                        {highestLevelOfEducation ??
                            'HSSE, A Levels, DAE, 2 Years Bachelors Degree, 4 Years Bachelors Degree, Masters degree'}
                    </h1>
                </div>
                <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                    <p>English Language Test</p>
                    <h1 className="text-base md:text-xl font-semibold">
                        {languageTestName ?? "I don't have any test"}
                    </h1>
                    {languageTestScore && (
                        <div className="score">
                            <div className="flex flex-wrap gap-2">
                                <span className="">
                                    Speaking: <b>{speaking ?? 'Null'}</b>
                                </span>
                                <span className="">
                                    Listening: <b>{listening ?? 'Null'}</b>
                                </span>
                                <span className="">
                                    Writing: <b>{writing ?? 'Null'}</b>
                                </span>
                                <span className="">
                                    Reading: <b>{reading ?? 'Null'}</b>
                                </span>
                                <span className="">
                                    Overall: <b>{overAll ?? 'Null'}</b>
                                </span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="pb-5 flex flex-col gap-y-2 text-mainTextColor relative ">
                    <button
                        className="absolute -top-2 -right-3 "
                        onClick={() =>
                            updateModal({
                                type: modalType.upload_user_documents,
                                state: {}
                            })
                        }
                    >
                        <FiEdit />
                    </button>
                    <p>Upload Documents</p>
                    <h1 className="text-base md:text-xl font-semibold">
                        {documents.length
                            ? documents.map((doc) => (
                                  <Link
                                      href={doc.url ?? ''}
                                      target="_blank"
                                      key={`upload-user-docs-${doc}`}
                                      className="px-4 py-2 border border-blueColor hover:bg-blueColor hover:text-white rounded-md my-2 block"
                                  >
                                      {doc.name}
                                  </Link>
                              ))
                            : 'No Docs Uploaded Yet'}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default AcademicInformation;
