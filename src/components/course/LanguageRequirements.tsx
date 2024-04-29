import { courseLanguageRequirement } from '@/types';
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
                <>
                    <h1 className='w-full text-left text-xl font-bold'>{key}</h1>
                    <table className="border-separate border border-blueColor">
                        <tbody>
                            <tr>
                                {Object.keys(value).map((key, i) => (
                                    <th
                                        key={key + i + '--key--'}
                                        className="px-4 py-2 text-center border border-blueColor bg-blueColor text-white font-bold uppercase"
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
                </>
            ))}
        </div>
    );
};

export default LanguageRequirements;
