import React from 'react';
import Image from 'next/image';
import { courseLanguageRequirement } from '@/types';

const LanguageRequirements = ({
    language
}: {
    language: courseLanguageRequirement;
}) => {
    const data: { [key: string]: string } = {
        oa: 'Overall',
        s: 'Speaking',
        l: 'Listening',
        r: 'Reading',
        w: 'Writing'
    };

    const titleNames: { [key: string]: string } = {
        ielts: 'IELTS',
        pte: 'PTE',
        oxford: 'Oxford ELLT',
        language: 'Language Cert',
        duolingo: 'Duolingo',
        moi: 'MOI'
    };

    return (
        <div className="w-full flex flex-col items-start gap-8">
            <div className="hidden lg:flex flex-col w-full">
                {Object.entries(language).map(([key, value], i) => (
                    <div key={i} className="w-full overflow-hidden border flex">
                        <Image
                            src={`/images/CourseDetail/${key}.png`}
                            alt={`${titleNames[key]} icon`}
                            width={150}
                            height={100}
                        />
                        {key === 'ielts' || key === 'pte' ? (
                            <div className="w-full">
                                <div className="grid grid-cols-5 bg-blueColor text-white font-semibold text-center">
                                    {Object.keys(data).map((header, idx) => (
                                        <div
                                            key={idx}
                                            className="py-2 border-r last:border-none"
                                        >
                                            {data[header]}
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-5 text-center">
                                    {Object.keys(data).map((field, idx) => (
                                        <div
                                            key={idx}
                                            className="py-2 border-r last:border-none"
                                        >
                                            {(
                                                value as {
                                                    [key: string]: string;
                                                }
                                            )[field] || '--'}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}

                        {typeof value === 'object' &&
                        'isAvailable' in value &&
                        key !== 'ielts' &&
                        key !== 'pte' ? (
                            <div className="text-gray-700 flex items-center mx-7 font-semibold">
                                {value.isAvailable
                                    ? `The ${titleNames[key]} test is acceptable for admission.`
                                    : `The ${titleNames[key]} test is not acceptable.`}
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>

            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full pb-3">
                {Object.entries(language).map(([key, value], i) =>
                    key === 'pte' || key === 'ielts' ? (
                        <div
                            key={'language-card-' + i}
                            className="bg-card border border-border p-4 rounded-lg flex flex-col items-center w-full group hover:border-blueColor transition-all duration-150"
                        >
                            <Image
                                width={224}
                                height={128}
                                src={`/images/CourseDetail/${key}.png`}
                                alt={`${key} Logo`}
                                className="block mb-4 aspect-[112/55] w-4/6 border-blueColor border rounded-md object-cover group-hover:w-9/12 group-hover:mb-2 transition-all duration-150"
                            />
                            <div className="border border-blueColor w-full flex flex-col rounded-md group-hover:text-blueColor transition-all duration-150">
                                {Object.keys(value).map((key, subIndex) => (
                                    <div
                                        key={`value-${subIndex}`}
                                        className="px-4 py-2 flex justify-between text-center border-b border-blueColor last-of-type:border-0"
                                    >
                                        <span className="text-blueColor font-semibold">
                                            {data[key]}
                                        </span>

                                        <span>
                                            {
                                                (
                                                    value as {
                                                        [key: string]: string;
                                                    }
                                                )[key]
                                            }
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        'isAvailable' in value &&
                        value.isAvailable && (
                            <div
                                key={'language-card-' + i}
                                className="bg-card border border-border p-4 rounded-lg flex flex-col items-center w-full group hover:border-blueColor transition-all duration-150 self-start"
                            >
                                <Image
                                    width={224}
                                    height={128}
                                    src={`/images/CourseDetail/${key}.png`}
                                    alt={`${key} Logo`}
                                    className="block mb-4 aspect-[112/55] w-4/6 border-blueColor border rounded-md object-cover group-hover:w-9/12 group-hover:mb-2 transition-all duration-150"
                                />
                              
                                <div className="text-center group-hover:text-blueColor capitalize">
                                    {key} test is acceptable for admission.
                                </div>
                            </div>
                        )
                    )
                )}
            </div>
        </div>
    );
};

export default LanguageRequirements;
