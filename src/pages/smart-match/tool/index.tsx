import {
    EnglishTest,
    Months,
    TestScoreRanges,
    testScoreRanges,
    yearOptions
} from '@/components/SmartMatch/data';
import Button from '@/components/Button';
import { ROUTES } from '@/config/constant';
import { useSmartMatchTool } from '@/hooks/smartMatch';
import { useGetDisciplineQuery } from '@/store/slices/allRequests';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { IoArrowForward } from 'react-icons/io5';
import { InputField } from '@/components/SmartMatch/InputField';
import { Chip } from '@/components/SmartMatch/Chip';

interface OptionType {
    value: string;
    label: string;
}

const SmartMatchTool = () => {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);
    const [englishTest] = useState('');
    const router = useRouter();
    const TotalStep = 6;
    const { addQuery, query: data } = useSmartMatchTool();
    const { data: DisciplineData } = useGetDisciplineQuery();

    const selectedTest = englishTest;
    const scoreRange = testScoreRanges[selectedTest as keyof TestScoreRanges];

    const [errorMessages, setErrorMessages] = useState<{
        [key: string]: string;
    }>({
        nationality: '',
        year: '',
        month: '',
        studyLevel: '',
        subject: '',
        educationCountry: '',
        qualification: '',
        gradingSystem: '',
        englishPercentage: '',
        score: '',
        percentage: '',
        englishTest: '',
        listening: '',
        reading: '',
        speaking: '',
        writing: ''
    });

    const validateFields = () => {
        let isValid = true;
        const errors: { [key: string]: string } = {};

        switch (step) {
            case 1:
                if (!data.nationality) {
                    errors.nationality = 'Nationality is required';
                    isValid = false;
                }

                break;
            case 2:
                if (!data.year) {
                    errors.year = 'Year is required';
                    isValid = false;
                }
                if (!data.month) {
                    errors.month = 'Month is required';
                    isValid = false;
                }
                break;
            case 3:
                if (!data.studyLevel) {
                    errors.studyLevel = 'Study level is required';
                    isValid = false;
                }
                if (!data.discipline) {
                    errors.discipline = 'Discipline is required';
                    isValid = false;
                }
                break;

            case 4:
                if (!data.educationCountry) {
                    errors.educationCountry = 'Education Country is required';
                    isValid = false;
                }
                if (!data.qualification) {
                    errors.qualification = 'Qualification is required';
                    isValid = false;
                }
                if (!data.gradingSystem) {
                    errors.gradingSystem = 'Grading System is required';
                    isValid = false;
                }
                if (!data.score) {
                    errors.score = 'Score is required';
                    isValid = false;
                }
                if (!data.englishPercentage) {
                    errors.englishPercentage = 'English Percentage is required';
                    isValid = false;
                }
                break;

            case 5:
                if (!data.englishTest) {
                    errors.englishTest = 'English test is required';
                    isValid = false;
                }
                break;
            case 6:
                if (!data.listening) {
                    errors.listening = 'Listening score is required';
                    isValid = false;
                } else if (
                    +data.listening < scoreRange.min ||
                    +data.listening > scoreRange.max
                ) {
                    errors.listening = `Listening score must be between ${scoreRange.min} and ${scoreRange.max} for ${selectedTest}`;
                    isValid = false;
                }

                if (!data.reading) {
                    errors.reading = 'Reading score is required';
                    isValid = false;
                } else if (
                    +data.reading < scoreRange.min ||
                    +data.reading > scoreRange.max
                ) {
                    errors.reading = `Reading score must be between ${scoreRange.min} and ${scoreRange.max} for ${selectedTest}`;
                    isValid = false;
                }

                if (!data.speaking) {
                    errors.speaking = 'Speaking score is required';
                    isValid = false;
                } else if (
                    +data.speaking < scoreRange.min ||
                    +data.speaking > scoreRange.max
                ) {
                    errors.speaking = `Speaking score must be between ${scoreRange.min} and ${scoreRange.max} for ${selectedTest}`;
                    isValid = false;
                }

                if (!data.writing) {
                    errors.writing = 'Writing score is required';
                    isValid = false;
                } else if (
                    +data.writing < scoreRange.min ||
                    +data.writing > scoreRange.max
                ) {
                    errors.writing = `Writing score must be between ${scoreRange.min} and ${scoreRange.max} for ${selectedTest}`;
                    isValid = false;
                }

                if (!data.overallscore) {
                    errors.overallscore = 'Overall score is required';
                    isValid = false;
                } else if (
                    +data.overallscore < scoreRange.min ||
                    +data.overallscore > scoreRange.max
                ) {
                    errors.overallscore = `Overall score must be between ${scoreRange.min} and ${scoreRange.max} for ${selectedTest}`;
                    isValid = false;
                }
                break;

            default:
                break;
        }
        setErrorMessages(errors);
        return isValid;
    };

    const clearError = (field: keyof typeof errorMessages) => {
        setErrorMessages((prev) => ({
            ...prev,
            [field]: ''
        }));
    };

    const handleNext = () => {
        if (validateFields()) {
            if (step < TotalStep) {
                setStep((prevStep) => {
                    const nextStep = prevStep + 1;
                    setProgress((nextStep / TotalStep) * 100);
                    return nextStep;
                });
            }
        }
    };

    const handleSubmit = () => {
        if (validateFields()) {
            router.push({
                pathname: ROUTES.FILTER_COURSE,
                query: {
                    discipline: data.discipline,
                    intakes: data.month,
                    degreeType: data.studyLevel.toLowerCase()
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
        <div className="2xl:container mx-auto h-fit bg-white bg-[url('/images/SmartMatch/tool/Background.png')] bg-contain p-4 md:p-10">
            <div className=" w-full sm:w-3/4 lg:w-[55%] bg-[#f8fbff] rounded-xl mx-auto flex flex-col gap-5 h-fit p-7 px-6 md:px-14 ">
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
                        <div className="flex gap-1 text-center justify-center items-center">
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
                            data={[
                                'Pakistan',
                                'India',
                                'Bangladesh',
                                'Sri Lanka',
                                'Nepal',
                                'Saudi Arabia',
                                'UAE',
                                'Kuwait',
                                'Oman',
                                'Nigeria'
                            ]}
                            onSelect={(value: string) => {
                                addQuery({
                                    nationality: value
                                });
                                clearError('nationality');
                            }}
                            selectedValue={data.nationality}
                            error={errorMessages.nationality}
                        />
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="flex gap-1 text-center justify-center items-center">
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
                                clearError('nationality');
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
                                        clearError('month');
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
                        <div className="flex gap-1 text-center justify-center items-center">
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
                                clearError('studyLevel');
                            }}
                            selectedValue={data.studyLevel}
                            error={errorMessages.studyLevel}
                        />
                        <Chip
                            label="Select Subjects"
                            useSelect
                            options={DisciplineData?.map((item) => ({
                                label: item.name,
                                value: item.name
                            }))}
                            onChange={(option) => {
                                addQuery({
                                    discipline: (option as OptionType).value
                                });
                                clearError('discipline');
                            }}
                            placeholder="Search here to select subjects"
                            isMulti
                        />

                        <Chip
                            label="Popular searches"
                            data={DisciplineData?.map((item) => item.name)}
                            onSelect={(value: string) => {
                                addQuery({
                                    discipline: value
                                });
                                clearError('discipline');
                            }}
                            selectedValue={data.discipline}
                        />
                    </>
                )}

                {step === 4 && (
                    <>
                        <div className="flex gap-2 text-center justify-center items-center">
                            <h1 className=" lg:text-md font-semibold">
                                Tell us your Senior High School story
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
                            options={DisciplineData?.map((item) => ({
                                label: item.name,
                                value: item.name
                            }))}
                            onChange={(option) => {
                                addQuery({
                                    educationCountry: (option as OptionType)
                                        .value
                                });
                                clearError('educationCountry');
                            }}
                            placeholder="Country of Education*"
                            error={errorMessages.educationCountry}
                        />
                        <InputField
                            useSelect
                            options={DisciplineData?.map((item) => ({
                                label: item.name,
                                value: item.name
                            }))}
                            onChange={(option) => {
                                addQuery({
                                    qualification: (option as OptionType).value
                                });
                                clearError('qualification');
                            }}
                            placeholder="Qualification*"
                            error={errorMessages.qualification}
                        />
                        <InputField
                            useSelect
                            options={DisciplineData?.map((item) => ({
                                label: item.name,
                                value: item.name
                            }))}
                            onChange={(option) => {
                                addQuery({
                                    gradingSystem: (option as OptionType).value
                                });
                                clearError('gradingSystem');
                            }}
                            placeholder="Grading System*"
                            error={errorMessages.gradingSystem}
                        />

                        <InputField
                            onSelect={(value) => {
                                addQuery({
                                    score: value
                                });
                                clearError('score');
                            }}
                            placeholder="Enter Score*"
                            error={errorMessages.score}
                        />

                        <InputField
                            onSelect={(value) => {
                                addQuery({
                                    englishPercentage: value
                                });
                                clearError('englishPercentage');
                            }}
                            placeholder="English Percentage (1-100)*"
                            error={errorMessages.englishPercentage}
                        />
                    </>
                )}

                {step === 5 && (
                    <>
                        <div className="flex gap-1 text-center justify-center items-center">
                            <h1 className=" lg:text-md font-semibold">
                                Which English language test have you taken so
                                far?
                            </h1>
                            <img
                                src="/images/SmartMatch/Tool/Writing.png"
                                alt="world"
                                className="h-6"
                            />
                        </div>
                        <hr className="border h-0.5 bg-blueColor" />
                        <Chip
                            data={EnglishTest}
                            onSelect={(value: string) => {
                                addQuery({
                                    englishTest: value
                                });
                                clearError('englishTest');
                            }}
                            selectedValue={data.englishTest}
                            error={errorMessages.englishTest}
                        />
                    </>
                )}
                <div className="flex justify-center">
                    {step === 6 ? (
                        <Button
                            text="Reveal my matches"
                            className="transition-all py-3 !w-[80%] rounded-lg bg-gradient-to-r from-[#2C79FF] to-[#0953AA] hover:bg-gradient-to-l hover:text-white"
                            onClick={handleSubmit}
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
        </div>
    );
};

export default SmartMatchTool;
