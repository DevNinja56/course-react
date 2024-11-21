import React, { useState } from 'react';
import { Chip } from '@/components/SmartMatch/Chip';
import {
    ErrorMessages,
    FormData,
    clearError
} from '@/components/SmartMatch/Validation';
import { EnglishTest } from '../data';
import { InputField } from '../InputField';

interface EnglishProps {
    data: FormData;
    addQuery: (query: Record<string, string>) => void;
    errorMessages: ErrorMessages;
    setErrorMessages: React.Dispatch<React.SetStateAction<ErrorMessages>>;
}

const English = ({
    data,
    addQuery,
    errorMessages,
    setErrorMessages
}: EnglishProps) => {
    const [selectedTest, setSelectedTest] = useState('');
    return (
        <>
            <div className="flex gap-1 text-center max-sm:flex-col justify-center items-center">
                <h1 className="lg:text-xl my-2 font-semibold">
                    Which English language test have you taken so far?
                </h1>
                <img
                    src="/images/SmartMatch/Tool/writing.svg"
                    alt="world"
                    className="h-6"
                />
            </div>
            <hr className="border h-0.5 bg-blueColor" />
            <div className="overflow-y-auto setScrollBar max-h-[40vh] overflow-x-hidden">
                <Chip
                    data={Object.keys(EnglishTest)}
                    onSelect={(value: string) => {
                        setSelectedTest(value);

                        addQuery({
                            englishtest: EnglishTest[value]
                        });
                        clearError(
                            errorMessages,
                            setErrorMessages,
                            'englishtest'
                        );
                    }}
                    selectedValue={selectedTest}
                    error={errorMessages.englishtest}
                />

                {data.englishtest === 'ielts' && (
                    <>
                        <hr className="h-0.5 mt-2" />
                        {[
                            'overallscore',
                            'listening',
                            'reading',
                            'writing',
                            'speaking'
                        ].map((field) => (
                            <InputField
                                key={field}
                                onSelect={(value) => {
                                    addQuery({
                                        [field]: value
                                    });
                                    clearError(
                                        errorMessages,
                                        setErrorMessages,
                                        field as keyof ErrorMessages
                                    );
                                }}
                                gaps
                                placeholder={
                                    field === 'overallscore'
                                        ? 'Overall Band Score (1-9)'
                                        : `${field.charAt(0).toUpperCase() + field.slice(1)} Score (1-9)`
                                }
                                error={
                                    errorMessages[field as keyof ErrorMessages]
                                }
                            />
                        ))}
                    </>
                )}

                {data.englishtest === 'pte' && (
                    <>
                        <hr className="h-0.5 mt-2" />
                        {[
                            'overallscore',
                            'listening',
                            'reading',
                            'writing',
                            'speaking'
                        ].map((field) => (
                            <InputField
                                key={field}
                                onSelect={(value) => {
                                    addQuery({
                                        [field]: value
                                    });
                                    clearError(
                                        errorMessages,
                                        setErrorMessages,
                                        field as keyof ErrorMessages
                                    );
                                }}
                                gaps
                                placeholder={
                                    field === 'overallscore'
                                        ? 'Overall Score (10-90)'
                                        : `${field.charAt(0).toUpperCase() + field.slice(1)} Score (10-90)`
                                }
                                error={
                                    errorMessages[field as keyof ErrorMessages]
                                }
                            />
                        ))}
                    </>
                )}
            </div>
        </>
    );
};

export default English;
