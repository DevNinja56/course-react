import React from 'react';
import {
    ErrorMessages,
    FormData,
    clearError
} from '@/components/SmartMatch/Validation';
import { InputField } from '../InputField';
import {
    educationalQualifications,
    gradingScaleFormats,
    gradingScalesPostGraduate,
    otherQualification
} from '../data';
import { OptionType } from '@/types';

interface StoryProps {
    data: FormData;
    addQuery: (query: Record<string, string>) => void;
    errorMessages: ErrorMessages;
    setErrorMessages: React.Dispatch<React.SetStateAction<ErrorMessages>>;
}

const Story = ({
    data,
    addQuery,
    errorMessages,
    setErrorMessages
}: StoryProps) => {
    type GradingScaleKeys = keyof typeof gradingScaleFormats;
    const key: GradingScaleKeys = data.gradingSystem as GradingScaleKeys;
    const gradingEduScale = educationalQualifications
        .filter(
            (item) =>
                item.country === data.educationCountry &&
                item.qualification === data.qualification
        )
        .map((item) => ({
            label: item.gradingScale,
            value: item.gradingScale
        }));
    return (
        <>
            <div className="flex gap-2 text-center justify-center items-center">
                <h1 className="lg:text-xl my-2 font-semibold">
                    {`Tell us your ${data.studyLevel === 'Undergraduate' ? 'Senior High School' : 'Bachelor’s Degree'} story`}
                </h1>
                <img
                    src="/images/SmartMatch/Tool/Film Script Book.png"
                    alt="world"
                    className="h-6"
                />
            </div>
            <hr className="border h-0.5 bg-blueColor" />

            <InputField
                useSelect
                options={educationalQualifications.map((item) => ({
                    label: item.country,
                    value: item.country
                }))}
                onChange={(option) => {
                    addQuery({
                        educationCountry: (option as OptionType).value
                    });
                    clearError(
                        errorMessages,
                        setErrorMessages,
                        'educationCountry'
                    );
                }}
                placeholder="Country of Education*"
                error={errorMessages.educationCountry}
                defaultValue={
                    data.educationCountry
                        ? {
                              label: String(data.educationCountry),
                              value: String(data.educationCountry)
                          }
                        : undefined
                }
            />

            {data.studyLevel === 'Undergraduate' && (
                <InputField
                    useSelect
                    options={[
                        ...educationalQualifications
                            .filter(
                                (item) => item.country === data.educationCountry
                            )
                            .map((item) => ({
                                label: item.qualification,
                                value: item.qualification
                            })),
                        ...otherQualification.map((item) => ({
                            label: item.qualification,
                            value: item.qualification
                        }))
                    ]}
                    onChange={(option) => {
                        addQuery({
                            qualification: (option as OptionType).value
                        });
                        clearError(
                            errorMessages,
                            setErrorMessages,
                            'qualification'
                        );
                    }}
                    placeholder="Qualification*"
                    error={errorMessages.qualification}
                    isDisabled={!data.educationCountry}
                    defaultValue={
                        data.qualification
                            ? {
                                  label: String(data.qualification),
                                  value: String(data.qualification)
                              }
                            : undefined
                    }
                />
            )}

            {data.studyLevel === 'Undergraduate' && (
                <InputField
                    useSelect
                    options={
                        gradingEduScale.length
                            ? gradingEduScale
                            : otherQualification
                                  .filter(
                                      (item) =>
                                          item.qualification ===
                                          data.qualification
                                  )
                                  .map((item) => ({
                                      label: item.qualification,
                                      value: item.qualification
                                  }))
                    }
                    onChange={(option) => {
                        addQuery({
                            gradingSystem: (option as OptionType).value
                        });
                        clearError(
                            errorMessages,
                            setErrorMessages,
                            'gradingSystem'
                        );
                    }}
                    placeholder="Grading System*"
                    error={errorMessages.gradingSystem}
                    isDisabled={!data.qualification}
                    defaultValue={
                        data.gradingSystem
                            ? {
                                  label: String(data.gradingSystem),
                                  value: String(data.gradingSystem)
                              }
                            : undefined
                    }
                />
            )}

            {data.studyLevel === 'Postgraduate' && (
                <>
                    <InputField
                        useSelect
                        options={gradingScalesPostGraduate.map((item) => ({
                            label: item.description,
                            value: item.description
                        }))}
                        onChange={(option) => {
                            addQuery({
                                gradingSystem: (option as OptionType).value
                            });
                            clearError(
                                errorMessages,
                                setErrorMessages,
                                'gradingSystem'
                            );
                        }}
                        placeholder="Grading System*"
                        error={errorMessages.gradingSystem}
                        isDisabled={!data.educationCountry}
                        defaultValue={
                            data.gradingSystem
                                ? {
                                      label: String(data.gradingSystem),
                                      value: String(data.gradingSystem)
                                  }
                                : undefined
                        }
                    />
                </>
            )}

            <InputField
                type={gradingScaleFormats[key]?.type}
                onSelect={(value) => {
                    addQuery({ score: value });
                    clearError(errorMessages, setErrorMessages, 'score');
                }}
                placeholder={`${gradingScaleFormats[key] ? `Enter Score (${gradingScaleFormats[key].description})*` : 'Enter Score*'}`}
                error={errorMessages.score}
                isDisabled={!data.gradingSystem}
                selectedValue={String(data.score)}
            />
            {data.studyLevel === 'Undergraduate' && (
                <InputField
                    type="number"
                    onSelect={(value) => {
                        addQuery({
                            englishPercentage: value
                        });
                        clearError(
                            errorMessages,
                            setErrorMessages,
                            'englishPercentage'
                        );
                    }}
                    placeholder="English Percentage (1-100)*"
                    error={errorMessages.englishPercentage}
                    selectedValue={
                        data.englishPercentage && String(data.englishPercentage)
                    }
                />
            )}
        </>
    );
};

export default Story;
