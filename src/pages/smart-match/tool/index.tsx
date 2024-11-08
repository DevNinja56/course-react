import {
    Countries,
    educationalQualifications,
    EnglishTest,
    gradingScaleFormats,
    gradingScalesPostGraduate,
    Months,
    otherQualification,
    yearOptions
} from '@/components/SmartMatch/data';
import Button from '@/components/Button';
import { ROUTES } from '@/config/constant';
import { useSmartMatchTool } from '@/hooks/smartMatch';
import {
    useGetDisciplineQuery,
    useGetSpecializationQuery
} from '@/store/slices/allRequests';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { IoArrowForward } from 'react-icons/io5';
import { InputField } from '@/components/SmartMatch/InputField';
import { Chip } from '@/components/SmartMatch/Chip';
import {
    clearError,
    ErrorMessages,
    validateFields
} from '@/components/SmartMatch/Validation';
import FeeSlider from '@/components/SmartMatch/FeeSlider';
import Image from 'next/image';

interface OptionType {
    value: string;
    label: string;
}

const SmartMatchTool = () => {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);
    const router = useRouter();
    const TotalStep = 7;
    const { addQuery, query: data, clearAllQuery } = useSmartMatchTool();
    const { data: DisciplineData } = useGetDisciplineQuery();
    const { data: SpecializationData } = useGetSpecializationQuery();
    const [disciplineId, setDisciplineId] = useState('');
    const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});
    type GradingScaleKeys = keyof typeof gradingScaleFormats;
    const key: GradingScaleKeys = data.gradingSystem as GradingScaleKeys;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
        clearAllQuery();
    }, []);
    useEffect(() => {
        if (data.englishTest) {
            addQuery({
                reading: '',
                listening: '',
                overallscore: '',
                speaking: '',
                writing: ''
            });
            setErrorMessages({});
        }
    }, [data.englishTest]);

    useEffect(() => {
        if (data.studyLevel) {
            addQuery({
                educationCountry: '',
                qualification: '',
                gradingSystem: '',
                score: '',
                englishPercentage: ''
            });
            setErrorMessages({});
        }
    }, [data.studyLevel]);

    useEffect(() => {
        if (data.educationCountry) {
            addQuery({
                qualification: '',
                gradingSystem: '',
                score: ''
            });
            setErrorMessages({});
        }
    }, [data.educationCountry]);

    useEffect(() => {
        if (data.qualification) {
            addQuery({
                gradingSystem: '',
                score: ''
            });
            setErrorMessages({});
        }
    }, [data.qualification]);
    const handleNext = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);

        const { isValid, errors } = validateFields(data, step);
        setErrorMessages(errors);

        if (isValid && step < TotalStep) {
            setStep((prevStep) => {
                const nextStep = prevStep + 1;
                setProgress((nextStep / TotalStep) * 100);
                return nextStep;
            });
        }
    };

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

    useEffect(() => {
        if (disciplineId) {
            addQuery({ specialization: [] });
        }
    }, [disciplineId]);

    const handleSubmit = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
        const { isValid, errors } = validateFields(data, step);
        setErrorMessages(errors);
        if (isValid) {
            router.push({
                pathname: ROUTES.FILTER_COURSE,
                query: {
                    // discipline: data.discipline,
                    // degreeType: data.studyLevel
                    institute: 'Staffordshire University'
                }
            });
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep((prevStep) => {
                const nextStep = prevStep - 1;
                setProgress(nextStep === 1 ? 0 : (nextStep / TotalStep) * 100);
                return nextStep;
            });
        }
    };

    return (
        <div
            className="2xl:container mx-auto h-fit bg-white bg-[url('/images/SmartMatch/tool/Background.png')] bg-cover p-4 md:p-10
         relative"
        >
            <img
                alt="Elipse"
                className="absolute lg:h-48 h-16 -right-24 "
                src="/images/elipse.png"
            />
            <img
                alt="Elipse"
                className="absolute  h-28 -left-10 top-72"
                src="/images/Blogs/Ellipse 426.svg"
            />

            {loading ? (
                <div className="h-[70vh] flex flex-col gap-2 items-center justify-center">
                    <Image
                        src="/images/SmartMatch/Tool/SmartMatch Loading Animation.gif"
                        alt=""
                        width={100}
                        height={100}
                    />
                    <h1 className="font-semibold text-xl">
                        Hang tight! Good things take time...
                    </h1>
                </div>
            ) : (
                <div className=" w-full sm:w-3/4 lg:w-[55%] bg-[#f8fbff] rounded-xl mx-auto flex flex-col gap-3 h-fit p-7 px-6 md:px-14 ">
                    <div className="flex justify-center items-center relative">
                        {step > 1 && (
                            <BiArrowBack
                                className="absolute text-black text-xl left-0 cursor-pointer"
                                onClick={handleBack}
                            />
                        )}
                        <div className="w-4/5 md:w-2/3  bg-[#e8f0fc] h-2.5 rounded-full overflow-hidden">
                            <div
                                className="bg-gradient-to-b from-blue-700 to-blue-400 h-full transition-all duration-700"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    {step === 1 && (
                        <>
                            <div className="flex gap-1 text-center max-sm:flex-col justify-center items-center">
                                <h1 className=" lg:text-md font-semibold">
                                    What is your country of nationality?
                                </h1>
                                <img
                                    src="/images/SmartMatch/Tool/World.png"
                                    alt="world"
                                    className="h-6"
                                />
                            </div>
                            <hr className="border h-0.5 bg-blueColor" />
                            <Chip
                                label="Select your nationality"
                                data={Countries}
                                onSelect={(value: string) => {
                                    addQuery({
                                        nationality: value
                                    });
                                    clearError(
                                        errorMessages,
                                        setErrorMessages,
                                        'nationality'
                                    );
                                }}
                                selectedValue={data.nationality}
                                error={errorMessages.nationality}
                            />
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <div className="flex  text-center max-sm:flex-col justify-center items-center">
                                <h1 className=" lg:text-md font-semibold">
                                    When do you plan to kick-start your studies?
                                </h1>
                                <img
                                    src="/images/SmartMatch/Tool/Calendar.png"
                                    alt="world"
                                    className="h-6"
                                />
                            </div>
                            <hr className="border h-0.5 bg-blueColor" />

                            <Chip
                                label="Start Year"
                                data={yearOptions}
                                onSelect={(value: string) => {
                                    addQuery({
                                        year: value
                                    });
                                    clearError(
                                        errorMessages,
                                        setErrorMessages,
                                        'year'
                                    );
                                }}
                                selectedValue={data.year}
                                error={errorMessages.year}
                            />

                            {data.year && (
                                <>
                                    <hr className="border h-0.5 bg-blueColor" />
                                    <Chip
                                        label="Start Month"
                                        data={Months}
                                        onSelect={(value: string) => {
                                            addQuery({
                                                month: value
                                            });
                                            clearError(
                                                errorMessages,
                                                setErrorMessages,
                                                'month'
                                            );
                                        }}
                                        selectedValue={data.month}
                                        error={errorMessages.month}
                                    />
                                </>
                            )}
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <div className="flex gap-1 text-center max-sm:flex-col justify-center items-center">
                                <h1 className=" lg:text-md font-semibold">
                                    What do you wish to study?
                                </h1>
                                <img
                                    src="/images/SmartMatch/Tool/Book.png"
                                    alt="world"
                                    className="h-6"
                                />
                            </div>
                            <hr className="border h-0.5 bg-blueColor" />
                            <div className="overflow-y-scroll setScrollBar h-[43vh] overflow-x-hidden">
                                <Chip
                                    label="Study Level"
                                    data={[
                                        'Foundation',
                                        'Undergraduate',
                                        'Postgraduate'
                                    ]}
                                    onSelect={(value: string) => {
                                        addQuery({
                                            studyLevel: value
                                        });
                                        clearError(
                                            errorMessages,
                                            setErrorMessages,
                                            'studyLevel'
                                        );
                                    }}
                                    selectedValue={data.studyLevel}
                                    error={errorMessages.studyLevel}
                                />
                                <Chip
                                    label="Popular searches"
                                    data={DisciplineData?.map(
                                        (item) => item.name
                                    )}
                                    onSelect={(value: string) => {
                                        const selectedDiscipline =
                                            DisciplineData?.find(
                                                (item) => item.name === value
                                            );

                                        if (selectedDiscipline) {
                                            setDisciplineId(
                                                selectedDiscipline.id
                                            );

                                            addQuery({
                                                discipline:
                                                    selectedDiscipline.name
                                            });

                                            clearError(
                                                errorMessages,
                                                setErrorMessages,
                                                'discipline'
                                            );
                                        }
                                    }}
                                    selectedValue={data.discipline}
                                    error={errorMessages.discipline}
                                />
                                <div>
                                    <Chip
                                        label="Select Subjects"
                                        useSelect
                                        options={SpecializationData?.filter(
                                            (item) =>
                                                item.discipline ===
                                                    disciplineId &&
                                                !(
                                                    data.specialization &&
                                                    data.specialization.includes(
                                                        item.name
                                                    )
                                                )
                                        ).map((item) => ({
                                            label: item.name,
                                            value: item.name
                                        }))}
                                        onChange={(option) => {
                                            const selectedValue = (
                                                option as OptionType
                                            ).value;

                                            const specialization =
                                                Array.isArray(
                                                    data.specialization
                                                )
                                                    ? data.specialization
                                                    : [];

                                            const isSelected =
                                                specialization.includes(
                                                    selectedValue
                                                );

                                            if (
                                                !isSelected &&
                                                specialization.length < 3
                                            ) {
                                                addQuery({
                                                    specialization: [
                                                        ...specialization,
                                                        selectedValue
                                                    ]
                                                });
                                            } else if (isSelected) {
                                                addQuery({
                                                    specialization:
                                                        specialization.filter(
                                                            (item) =>
                                                                item !==
                                                                selectedValue
                                                        )
                                                });
                                            }
                                            clearError(
                                                errorMessages,
                                                setErrorMessages,
                                                'specialization'
                                            );
                                        }}
                                        placeholder="Search here to select subjects"
                                        isDisable={
                                            !data.discipline ||
                                            (data.specialization
                                                ? data.specialization.length ===
                                                  3
                                                : undefined)
                                        }
                                        error={errorMessages.specialization}
                                    />
                                    <Chip
                                        data={
                                            Array.isArray(data.specialization)
                                                ? data.specialization
                                                : []
                                        }
                                        selectedValue={
                                            Array.isArray(data.specialization)
                                                ? data.specialization
                                                : []
                                        }
                                        onRemove={(value) => {
                                            addQuery({
                                                specialization: Array.isArray(
                                                    data.specialization
                                                )
                                                    ? data.specialization.filter(
                                                          (item) =>
                                                              item != value
                                                      )
                                                    : []
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    {step === 4 && (
                        <>
                            <div className="flex gap-2 text-center justify-center items-center">
                                <h1 className="lg:text-md font-semibold">
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
                                options={educationalQualifications.map(
                                    (item) => ({
                                        label: item.country,
                                        value: item.country
                                    })
                                )}
                                onChange={(option) => {
                                    addQuery({
                                        educationCountry: (option as OptionType)
                                            .value
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
                                              label: String(
                                                  data.educationCountry
                                              ),
                                              value: String(
                                                  data.educationCountry
                                              )
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
                                                (item) =>
                                                    item.country ===
                                                    data.educationCountry
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
                                            qualification: (
                                                option as OptionType
                                            ).value
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
                                                  label: String(
                                                      data.qualification
                                                  ),
                                                  value: String(
                                                      data.qualification
                                                  )
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
                                            gradingSystem: (
                                                option as OptionType
                                            ).value
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
                                                  label: String(
                                                      data.gradingSystem
                                                  ),
                                                  value: String(
                                                      data.gradingSystem
                                                  )
                                              }
                                            : undefined
                                    }
                                />
                            )}

                            {data.studyLevel === 'Postgraduate' && (
                                <>
                                    <InputField
                                        useSelect
                                        options={gradingScalesPostGraduate.map(
                                            (item) => ({
                                                label: item.description,
                                                value: item.description
                                            })
                                        )}
                                        onChange={(option) => {
                                            addQuery({
                                                gradingSystem: (
                                                    option as OptionType
                                                ).value
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
                                                      label: String(
                                                          data.gradingSystem
                                                      ),
                                                      value: String(
                                                          data.gradingSystem
                                                      )
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
                                    clearError(
                                        errorMessages,
                                        setErrorMessages,
                                        'score'
                                    );
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
                                        data.englishPercentage &&
                                        String(data.englishPercentage)
                                    }
                                />
                            )}
                        </>
                    )}
                    {step === 5 && (
                        <>
                            <div className="flex gap-1 text-center max-sm:flex-col justify-center items-center">
                                <h1 className="lg:text-md font-semibold">
                                    Which English language test have you taken
                                    so far?
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
                                    data={EnglishTest}
                                    onSelect={(value: string) => {
                                        addQuery({
                                            englishTest: value
                                        });
                                        clearError(
                                            errorMessages,
                                            setErrorMessages,
                                            'englishTest'
                                        );
                                    }}
                                    selectedValue={data.englishTest}
                                    error={errorMessages.englishTest}
                                />
                                {data.englishTest === 'IELTS' && (
                                    <>
                                        <hr className=" h-0.5 mt-2" />
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
                                                        ? 'Overall Band Score (1-10)'
                                                        : `${field.charAt(0).toUpperCase() + field.slice(1)} Score (1-10)`
                                                }
                                                error={
                                                    errorMessages[
                                                        field as keyof ErrorMessages
                                                    ]
                                                }
                                            />
                                        ))}
                                    </>
                                )}

                                {data.englishTest === 'PTE Academic' && (
                                    <>
                                        <hr className=" h-0.5 mt-2" />

                                        <hr className="border h-0.5 bg-blueColor" />
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
                                                    errorMessages[
                                                        field as keyof ErrorMessages
                                                    ]
                                                }
                                            />
                                        ))}
                                    </>
                                )}
                            </div>
                        </>
                    )}

                    {step === 6 && (
                        <>
                            <div className="flex gap-1 text-center max-sm:flex-col justify-center items-center">
                                <h1 className=" lg:text-md font-semibold">
                                    Tell us about your tuition fee budget?
                                </h1>
                                <img
                                    src="/images/SmartMatch/Tool/Wallet.png"
                                    alt="Wallet"
                                    className="h-6"
                                />
                            </div>
                            <hr className="border h-0.5 bg-blueColor" />
                            <div className="flex justify-center mb-4">
                                <FeeSlider QueryAdd={addQuery} />
                            </div>
                        </>
                    )}
                    {step === 7 && (
                        <>
                            <div className="flex justify-center items-center flex-col text-xl font-bold">
                                <img
                                    src="/images/SmartMatch/Tool/Checkmark.png"
                                    alt="Book"
                                    className="h-40"
                                />
                                <h1 className="py-2 w-2/3 text-center text-lg">
                                    The search is complete and these are the
                                    best courses for you.
                                </h1>
                            </div>
                        </>
                    )}
                    <div className="flex justify-center">
                        {step === 7 ? (
                            <Button
                                text="Reveal my matches"
                                className="transition-all !w-fit px-6 md:px-20 py-2 rounded-md bg-gradient-to-r from-[#2C79FF] to-[#0953AA] text-xs hover:text-white hover:bg-gradient-to-l"
                                onClick={handleSubmit}
                                icon={<IoArrowForward />}
                                iconPlace
                            />
                        ) : (
                            <Button
                                text="Continue"
                                className="transition-all !w-fit px-6 md:px-20 py-2 rounded-md bg-gradient-to-r from-[#2C79FF] to-[#0953AA] text-xs hover:text-white hover:bg-gradient-to-l"
                                onClick={handleNext}
                                icon={<IoArrowForward />}
                                iconPlace
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
SmartMatchTool.layout = { footer: false };
export default SmartMatchTool;
