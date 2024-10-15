import Button from '@/components/Button';
import { useBestFitTool } from '@/hooks/bestFitTool';
import { useUi } from '@/hooks/user-interface';
import { useGetCountriesQuery } from '@/store/slices/allRequests';
import React, { useState } from 'react';
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
    const { hideModal } = useUi();
    const TotalStep = 7;
    const { addQuery } = useBestFitTool();
    const { data: CountryData } = useGetCountriesQuery();
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

    const months = [
        { value: 'January', label: 'January' },
        { value: 'February', label: 'February' },
        { value: 'March', label: 'March' },
        { value: 'April', label: 'April' },
        { value: 'May', label: 'May' },
        { value: 'June', label: 'June' },
        { value: 'July', label: 'July' },
        { value: 'August', label: 'August' },
        { value: 'September', label: 'September' },
        { value: 'October', label: 'October' },
        { value: 'November', label: 'November' },
        { value: 'December', label: 'December' }
    ];

    const availableMonths = () => {
        if (year === currentYear.toString()) {
            return months.slice(new Date().getMonth());
        }
        return months;
    };

    const handleNext = () => {
        if (step <= TotalStep) {
            setStep((prevStep) => {
                const nextStep = prevStep + 1;
                setProgress((nextStep / TotalStep) * 100);
                return nextStep;
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
                    <div className="flex flex-col justify-center items-center gap-1 ">
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
                        />
                        <Select
                            styles={customStyles}
                            className="pt-4 w-[80%] transition-all"
                            placeholder="Start Month"
                            options={availableMonths()}
                            onChange={(option) => {
                                addQuery({
                                    month: (option as OptionType).value
                                });
                            }}
                        />
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
                            options={yearOptions}
                            onChange={(option) => {
                                addQuery({
                                    studyLevel: (option as OptionType).value
                                });
                            }}
                        />
                        <Select
                            styles={customStyles}
                            className="pt-4 w-[80%] transition-all"
                            placeholder="Select Subjects"
                            options={availableMonths()}
                            onChange={(option) => {
                                addQuery({
                                    subject: (option as OptionType).value
                                });
                            }}
                        />
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
                        <Select
                            styles={customStyles}
                            className="pt-4 w-[80%] transition-all"
                            placeholder="Country of Education"
                            options={yearOptions}
                            onChange={(option) => {
                                addQuery({
                                    educationCountry: (option as OptionType)
                                        .value
                                });
                            }}
                        />
                        <Select
                            styles={customStyles}
                            className="pt-4 w-[80%] transition-all"
                            placeholder="Board of Education (optional)"
                            options={availableMonths()}
                            onChange={(option) => {
                                addQuery({
                                    educationBoard: (option as OptionType).value
                                });
                            }}
                        />
                        <Select
                            styles={customStyles}
                            className="pt-4 w-[80%] transition-all"
                            placeholder="Grading System"
                            options={availableMonths()}
                            onChange={(option) => {
                                addQuery({
                                    gradingSystem: (option as OptionType).value
                                });
                            }}
                        />
                        <Select
                            styles={customStyles}
                            className="pt-4 w-[80%] transition-all"
                            placeholder="Enter Score"
                            options={availableMonths()}
                            onChange={(option) => {
                                addQuery({
                                    highSchoolScore: (option as OptionType)
                                        .value
                                });
                            }}
                        />
                        <Select
                            styles={customStyles}
                            className="pt-4 w-[80%] transition-all"
                            placeholder="English Percentage (1-100)"
                            options={availableMonths()}
                            onChange={(option) => {
                                addQuery({
                                    englishPercentage: (option as OptionType).value
                                });
                            }}
                        />
                    </div>
                </>
            )}
            {step === 5 && (
                <>
                    <div className="flex justify-center items-center flex-col text-xl font-bold">
                        <img
                            src="/images/BestFitTool/Writing.png"
                            alt="Writing"
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
                            options={CountryData?.map((item) => ({
                                label: item.name,
                                value: item.name
                            }))}
                            onChange={(option) => {
                                addQuery({
                                    englishTest: (option as OptionType).value
                                });
                            }}
                        />
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
                        <h1 className="py-2">
                            Enter your PTE Academic results
                        </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5 mt-5 ">
                        <input
                            className="p-3 bg-blue-50 rounded-md border border-blue-200 focus:border-blue-600 focus:ring-0 placeholder:text-blue-600 font-normal w-[80%]"
                            placeholder="Listening (1-90)"
                            onChange={(e) => {
                                addQuery({
                                    pteSpeaking: e.target.value
                                });
                            }}
                            
                        />
                        <input
                            className="p-3 bg-blue-50 rounded-md border border-blue-200 focus:border-blue-600 focus:ring-0 placeholder:text-blue-600 font-normal w-[80%]"
                            placeholder="Reading (1-90)"
                            onChange={(e) => {
                                addQuery({
                                    pteReading: e.target.value
                                });
                            }}
                        />
                        <input
                            className="p-3 bg-blue-50 rounded-md border border-blue-200 focus:border-blue-600 focus:ring-0 placeholder:text-blue-600 font-normal w-[80%]"
                            placeholder="Speaking (1-90)"
                            onChange={(e) => {
                                addQuery({
                                    pteSpeaking: e.target.value
                                });
                            }}
                            
                        />
                        <input
                            className="p-3 bg-blue-50 rounded-md border border-blue-200 focus:border-blue-600 focus:ring-0 placeholder:text-blue-600 font-normal w-[80%]"
                            placeholder="Writing (1-90)"
                            onChange={(e) => {
                                addQuery({
                                    pteWriting: e.target.value
                                });
                            }}
                            
                        />
                        <input
                            className="p-3 bg-blue-50 rounded-md border border-blue-200 focus:border-blue-600 focus:ring-0 placeholder:text-blue-600 font-normal w-[80%]"
                            placeholder="Overall Score (1-90)"
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
                {step === 9 ? (
                    <Button
                        text="Reveal my matches"
                        className="transition-all py-3 !w-[80%] rounded-lg"
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
