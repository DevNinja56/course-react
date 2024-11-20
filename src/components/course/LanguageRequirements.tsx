import { courseLanguageRequirement } from '@/types';
import Image from 'next/image';
import React from 'react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full pb-3">
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
                            className="block mb-4 aspect-[112/55] w-4/6 border-blueColor border rounded-md object-cover group-hover:w-9/12 group-hover:mb-2 transition-all duration-150 "
                        />
                        <div className="text-lg font-bold mb-2">
                            {titleNames?.[key] ?? 'No Title'}
                        </div>
                        <div className="border border-blueColor w-full flex flex-col rounded-md group-hover:text-blueColor transition-all duration-150">
                            {Object.keys(value).map((key, subIndex) => (
                                <div
                                    key={`value-${subIndex}`}
                                    className="px-4 py-2 text-center border-b border-blueColor last-of-type:border-0 "
                                >
                                    <span>{data[key]}</span> /{' '}
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
                            className="bg-card border border-border p-4 rounded-lg flex flex-col items-center w-full group hover:border-blueColor transition-all duration-150 self-start  "
                        >
                            <Image
                                width={224}
                                height={128}
                                src={`/images/CourseDetail/${key}.png`}
                                alt={`${key} Logo`}
                                className="block mb-4 aspect-[112/55] w-4/6 border-blueColor border rounded-md object-cover group-hover:w-9/12 group-hover:mb-2 transition-all duration-150 "
                            />
                            <div className="text-lg font-bold mb-2">
                                {titleNames?.[key] ?? 'No Title'}
                            </div>

                            <div className="text-center group-hover:text-blueColor capitalize">
                                {key} test is acceptable for admission.
                            </div>
                        </div>
                    )
                )
            )}
        </div>
    );
};

export default LanguageRequirements;
