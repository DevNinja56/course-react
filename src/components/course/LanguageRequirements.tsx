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

    return (
        <div className="flex flex-col gap-4 items-center w-full uppercase  ">
            {Object.entries(language).map(([key, value], i) => (
                <div
                    className="flex flex-wrap gap-3 w-full justify-center items-center"
                    key={'language-container--' + i}
                >
                    <Image
                        src={`/images/CourseDetail/${key}.jpeg`}
                        alt="flag"
                        width={150}
                        height={70}
                        className="block ml-2 border-blueColor border rounded-md max-h-[70px]"
                    />
                    <table className="border border-blueColor  ">
                        <tbody>
                            <tr>
                                {Object.keys(value).map((key, i) => (
                                    <th
                                        key={key + i + '--key--'}
                                        className="px-4 py-2 text-center border border-blueColor text-blueColor font-bold uppercase"
                                    >
                                        {data[key]}
                                    </th>
                                ))}
                            </tr>
                            <tr key={'language-table--' + i}>
                                {Object.keys(value).map((key, i) => (
                                    <td
                                        key={key + i + '--value--'}
                                        className="px-4 py-2 text-center border border-blueColor"
                                    >
                                        {value[key as keyof typeof value]}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default LanguageRequirements;
