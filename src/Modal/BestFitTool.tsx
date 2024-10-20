import {
    EnglishTest,
    GradingSystem,
    months
} from '@/components/BestFitTool/data';
import InputField from '@/components/BestFitTool/input';
import Button from '@/components/Button';
import { ROUTES } from '@/config/constant';
import { useBestFitTool } from '@/hooks/bestFitTool';
import { useUi } from '@/hooks/user-interface';
import {
    useGetCountriesQuery,
    useGetDisciplineQuery
} from '@/store/slices/allRequests';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { IoArrowBackCircle } from 'react-icons/io5';
import Select, { StylesConfig } from 'react-select';

interface OptionType {
    value: string;
    label: string;
}

const customStyles: StylesConfig = {
    control: (provided) => ({
        ...provided,
        padding: '6px',
        backgroundColor: '#2C79FF1A',
        borderRadius: '0.5rem',
        borderColor: '#bbd4ff',
        boxShadow: 'none',
        '&:hover': {
            borderColor: '#307cff'
        }
    }),
    indicatorSeparator: () => ({}),
    placeholder: (provided) => ({
        ...provided,
        fontWeight: '400',
        color: '#2C79FF'
    }),
    option: (provided) => ({
        ...provided,
        zIndex: '999'
    }),
    dropdownIndicator: () => ({ color: '#1d4ed8', paddingRight: '10px' })
};

export const BestFitTool = () => {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);
    const [englishTest, setEnglishTest] = useState('');
    const [sum, setSum] = useState(0);
    const router = useRouter();

    const { hideModal } = useUi();
    const TotalStep = 7;
    const { addQuery, query: data } = useBestFitTool();
    const { data: CountryData } = useGetCountriesQuery();
    const { data: DisciplineData } = useGetDisciplineQuery();
    const [year, setYear] = useState('');
    const currentYear = new Date().getFullYear();
    const yearOptions = [
        { value: currentYear.toString(), label: currentYear.toString() },
        {
            value: (currentYear + 1).toString(),
            label: (currentYear + 1).toString()
        },
        {
            value: (currentYear + 2).toString(),
            label: (currentYear + 2).toString()
        }
    ];
    const [errorMessages, setErrorMessages] = useState<{
        [key: string]: string;
    }>({
        year: '',
        month: '',
        studyLevel: '',
        subject: '',
        educationCountry: '',
        educationBoard: '',
        gradingSystem: '',
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
                    errors.educationCountry = 'Education country is required';
                    isValid = false;
                }
                if (!data.educationBoard) {
                    errors.educationBoard = 'Education board is required';
                    isValid = false;
                }
                if (!data.gradingSystem) {
                    errors.gradingSystem = 'Grading system is required';
                    isValid = false;
                }
                if (!data.score) {
                    errors.score = 'Score is required';
                    isValid = false;
                }
                if (!data.percentage) {
                    errors.percentage = 'Percentage is required';
                    isValid = false;
                } else if (+data.percentage < 0 || +data.percentage > 100) {
                    errors.percentage = 'Percentage must be between 0 and 100';
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
                }
                if (!data.reading) {
                    errors.reading = 'Reading score is required';
                    isValid = false;
                }
                if (!data.speaking) {
                    errors.speaking = 'Speaking score is required';
                    isValid = false;
                }
                if (!data.writing) {
                    errors.writing = 'Writing score is required';
                    isValid = false;
                }
                break;
            default:
                break;
        }
        setErrorMessages(errors);
        return isValid;
    };


    const availableMonths = () => {
        if (year === currentYear.toString()) {
            return months.slice(new Date().getMonth() + 1);
        }
        return months;
    };

    useEffect(() => {
        const listening = parseFloat(data.listening) || 0;
        const reading = parseFloat(data.reading) || 0;
        const speaking = parseFloat(data.speaking) || 0;
        const writing = parseFloat(data.writing) || 0;

        setSum(listening + reading + speaking + writing);
    }, [data.listening, data.reading, data.speaking, data.writing]);

    useEffect(() => {
        setSum(0);
    }, [step]);

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
                    discipline: data.discipline
                }
            });
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep((prevStep) => {
                const nextStep = prevStep - 1;
                setProgress((nextStep / TotalStep) * 100);
                return nextStep;
            });
        }
    };

    return (
        <div className="bg-white w-[550px] h-fit pb-8 rounded-lg ">
            <div className="bg-gradient-to-b from-blue-700 to-blue-400 h-fit rounded-t-lg ">
                {step > 1 && (
                    <IoArrowBackCircle
                        className="absolute text-white text-3xl top-[1.65rem] left-8 cursor-pointer"
                        onClick={handleBack}
                    />
                )}

                <h1 className="text-white font-bold text-xl flex justify-center items-center p-2">
                    Let&apos;s Start
                </h1>
                <IoIosCloseCircle
                    className="absolute text-white text-3xl top-[1.65rem] right-8 cursor-pointer"
                    onClick={hideModal}
                />
            </div>

            <div className="flex justify-center items-center py-8">
                <div className="w-[80%] bg-[#e8f0fc] h-2.5 rounded-full overflow-hidden">
                    <div
                        className="bg-gradient-to-b from-blue-700 to-blue-400 h-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
            {step === 1 && (
                <>
                    <div className="flex justify-center items-center flex-col text-xl font-bold">
                        <img
                            src="/images/BestFitTool/World.png"
                            alt="World"
                            className="h-24"
                        />
                        <h1 className="py-2">
                            What is your country of nationality?
                        </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <Select
                            styles={customStyles}
                            className="pt-4 w-[80%] transition-all"
                            placeholder="Select Country/Nationality"
                            options={CountryData?.map((item) => ({
                                label: item.name,
                                value: item.name
                            }))}
                            onChange={(option) => {
                                addQuery({
                                    nationality: (option as OptionType).value
                                });
                            }}
                            value={
                                CountryData && CountryData.length > 0
                                    ? {
                                          label: CountryData[0].name,
                                          value: CountryData[0].name
                                      }
                                    : null
                            }
                            defaultValue={
                                CountryData && CountryData.length > 0
                                    ? {
                                          label: CountryData[0].name,
                                          value: CountryData[0].name
                                      }
                                    : null
                            }
                        />
                    </div>
                </>
            )}
            {step === 2 && (
                <>
                    <div className="flex justify-center items-center flex-col text-xl font-bold">
                        <img
                            src="/images/BestFitTool/Calendar.png"
                            alt="Calendar"
                            className="h-24"
                        />
                        <h1 className="py-2">
                            When do you plan to kick-start your studies?
                        </h1>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Select
                            styles={customStyles}
                            className="pt-4 w-[80%] transition-all"
                            placeholder="Select Year"
                            options={yearOptions}
                            onChange={(option) => {
                                addQuery({
                                    year: (option as OptionType).value
                                });
                                setYear((option as OptionType).value);
                            }}
                            value={
                                data.year
                                    ? { label: data.year, value: data.year }
                                    : null
                            }
                            defaultValue={
                                data.year
                                    ? { label: data.year, value: data.year }
                                    : null
                            }
                        />
                        {errorMessages.year && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.year}
                            </span>
                        )}

                        <Select
                            styles={customStyles}
                            className={`pt-4 w-[80%] transition-all ${!year && 'opacity-65'}`}
                            placeholder="Start Month"
                            options={availableMonths()}
                            onChange={(option) => {
                                addQuery({
                                    month: (option as OptionType).value
                                });
                            }}
                            isDisabled={!data.year}
                            value={
                                data.month
                                    ? { label: data.month, value: data.month }
                                    : null
                            }
                        />
                        {errorMessages.month && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.month}
                            </span>
                        )}
                    </div>
                </>
            )}
            {step === 3 && (
                <>
                    <div className="flex justify-center items-center flex-col text-xl font-bold">
                        <img
                            src="/images/BestFitTool/Book.png"
                            alt="Book"
                            className="h-24"
                        />
                        <h1 className="py-2">What do you wish to study?</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 ">
                        <Select
                            styles={customStyles}
                            className="pt-4 w-[80%] transition-all"
                            placeholder="Select Study Level"
                            options={['Undergraduate', 'Postgraduate']?.map(
                                (item) => ({
                                    label: item,
                                    value: item
                                })
                            )}
                            onChange={(option) => {
                                addQuery({
                                    studyLevel: (option as OptionType).value
                                });
                            }}
                            value={
                                data.studyLevel
                                    ? {
                                          label: data.studyLevel,
                                          value: data.studyLevel
                                      }
                                    : null
                            }
                        />
                        {errorMessages.studyLevel && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.studyLevel}
                            </span>
                        )}
                        <Select
                            styles={customStyles}
                            className="pt-4 w-[80%] transition-all"
                            placeholder="Select Discipline"
                            options={DisciplineData?.map((item) => ({
                                label: item.name,
                                value: item.name
                            }))}
                            onChange={(option) => {
                                addQuery({
                                    discipline: (option as OptionType).value
                                });
                            }}
                            value={
                                data.discipline
                                    ? {
                                          label: data.discipline,
                                          value: data.discipline
                                      }
                                    : null
                            }
                        />
                        {errorMessages.discipline && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.discipline}
                            </span>
                        )}
                    </div>
                </>
            )}
            {step === 4 && (
                <>
                    <div className="flex justify-center items-center flex-col text-xl font-bold">
                        <img
                            src="/images/BestFitTool/Film Script Book.png"
                            alt="Book"
                            className="h-24"
                        />
                        <h1 className="py-2">
                            Tell us your Senior High School story
                        </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 ">
                        <InputField
                            placeholder="Country of Education"
                            onChange={(e) => {
                                addQuery({
                                    educationCountry: e.target.value
                                });
                            }}
                            value={data.educationCountry || ''}
                        />
                        {errorMessages.educationCountry && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.educationCountry}
                            </span>
                        )}
                        <InputField
                            placeholder="Board of Education (optional)"
                            onChange={(e) => {
                                addQuery({
                                    educationBoard: e.target.value
                                });
                            }}
                            value={data.educationBoard || ''}
                        />
                        {errorMessages.educationBoard && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.educationBoard}
                            </span>
                        )}
                        <Select
                            styles={customStyles}
                            className="pt-4 w-[80%] transition-all"
                            placeholder="Grading System"
                            options={GradingSystem}
                            onChange={(option) => {
                                addQuery({
                                    gradingSystem: (option as OptionType).value
                                });
                            }}
                            value={
                                data.gradingSystem
                                    ? {
                                          label: data.gradingSystem,
                                          value: data.gradingSystem
                                      }
                                    : null
                            }
                        />
                        {errorMessages.gradingSystem && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.gradingSystem}
                            </span>
                        )}
                        <InputField
                            placeholder="Enter Score"
                            type="number"
                            value={data.score || ''}
                            onChange={(e) => {
                                addQuery({
                                    score: e.target.value
                                });
                            }}
                        />
                        {errorMessages.score && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.score}
                            </span>
                        )}
                        <InputField
                            placeholder="Enter English Percentage (1-100)"
                            type="number"
                            value={data.percentage || ''}
                            onChange={(e) => {
                                addQuery({
                                    percentage: e.target.value
                                });
                            }}
                        />
                        {errorMessages.percentage && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.percentage}
                            </span>
                        )}
                    </div>
                </>
            )}

            {step === 5 && (
                <>
                    <div className="flex justify-center items-center flex-col text-xl font-bold">
                        <img
                            src="/images/BestFitTool/writing.png"
                            alt="writing"
                            className="h-24"
                        />
                        <h1 className="py-2">
                            Which English language test have you taken so far?
                        </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <Select
                            styles={customStyles}
                            className="pt-4 w-[80%] transition-all"
                            placeholder="Select English Test"
                            options={EnglishTest}
                            onChange={(option) => {
                                addQuery({
                                    englishTest: (option as OptionType).value
                                });
                                setEnglishTest((option as OptionType).value);
                            }}
                            value={
                                data.englishTest
                                    ? {
                                          label: data.englishTest,
                                          value: data.englishTest
                                      }
                                    : null
                            }
                        />
                        {errorMessages.englishTest && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.englishTest}
                            </span>
                        )}
                    </div>
                </>
            )}
            {step === 6 && (
                <>
                    <div className="flex justify-center items-center flex-col text-xl font-bold">
                        <img
                            src="/images/BestFitTool/Test Outcome.png"
                            alt="Book"
                            className="h-24"
                        />
                        <h1 className="py-2">{`Enter your ${englishTest} results`}</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <InputField
                            placeholder="Listening"
                            onChange={(e) =>
                                addQuery({ listening: e.target.value })
                            }
                            value={data.listening || ''}
                        />
                        {errorMessages.listening && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.listening}
                            </span>
                        )}
                        <InputField
                            placeholder="Reading"
                            onChange={(e) =>
                                addQuery({ reading: e.target.value })
                            }
                            value={data.reading || ''}
                        />
                        {errorMessages.reading && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.reading}
                            </span>
                        )}
                        <InputField
                            placeholder="Speaking"
                            onChange={(e) =>
                                addQuery({ speaking: e.target.value })
                            }
                            value={data.speaking || ''}
                        />
                        {errorMessages.speaking && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.speaking}
                            </span>
                        )}
                        <InputField
                            placeholder="Writing"
                            onChange={(e) =>
                                addQuery({ writing: e.target.value })
                            }
                            value={data.writing || ''}
                        />
                        {errorMessages.writing && (
                            <span className="text-red-500 text-sm self-start px-16">
                                {errorMessages.writing}
                            </span>
                        )}
                        <InputField
                            placeholder={`Overall Score = ${sum}`}
                            disabled
                        />
                    </div>
                </>
            )}

            {step === 7 && (
                <>
                    <div className="flex justify-center items-center flex-col text-xl font-bold">
                        <img
                            src="/images/BestFitTool/Checkmark.png"
                            alt="Book"
                            className="h-52"
                        />
                        <h1 className="py-2 w-[80%] text-center">
                            The search is complete and these are the best
                            courses for you.
                        </h1>
                    </div>
                </>
            )}
            <div className="flex justify-center mt-8">
                {step === 7 ? (
                    <Button
                        text="Reveal my matches"
                        className="transition-all py-3 !w-[80%] rounded-lg"
                        onClick={handleSubmit}
                    />
                ) : (
                    <Button
                        text="Continue"
                        className="transition-all py-3 !w-[80%] rounded-lg"
                        onClick={handleNext}
                    />
                )}
            </div>
        </div>
    );
};
