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
import {
    ErrorMessages,
    validateFields
} from '@/components/SmartMatch/Validation';
import Image from 'next/image';
import Nationality from '@/components/SmartMatch/Steps/Nationality';
import StartIntake from '@/components/SmartMatch/Steps/StartIntake';
import Studies from '@/components/SmartMatch/Steps/Studies';
import Story from '@/components/SmartMatch/Steps/Story';
import English from '@/components/SmartMatch/Steps/English';
import FeeBudget from '@/components/SmartMatch/Steps/FeeBudget';

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

    useEffect(() => {
        if (disciplineId) {
            addQuery({ specialization: [] });
        }
    }, [disciplineId]);

    const handleSubmit = () => {
        const { isValid, errors } = validateFields(data, step);
        setErrorMessages(errors);
        if (isValid) {
            setLoading(true);

            setTimeout(() => {
                router.push({
                    pathname: ROUTES.FILTER_COURSE,
                    query: {
                        // discipline: data.discipline,
                        // degreeType: data.studyLevel
                        institute: 'Staffordshire University'
                    }
                });
            }, 2000);
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
                <div className="h-[60vh] flex flex-col gap-2 items-center justify-center">
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
                <div className=" max-h-[70vh] w-full sm:w-3/4 bg-[#f8fbff] rounded-xl mx-auto flex flex-col gap-3 h-fit p-7 px-6 md:px-14">
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
                        <Nationality
                            addQuery={addQuery}
                            data={data}
                            errorMessages={errorMessages}
                            setErrorMessages={setErrorMessages}
                        />
                    )}

                    {step === 2 && (
                        <StartIntake
                            addQuery={addQuery}
                            data={data}
                            errorMessages={errorMessages}
                            setErrorMessages={setErrorMessages}
                        />
                    )}

                    {step === 3 && (
                        <Studies
                            addQuery={addQuery}
                            data={data}
                            errorMessages={errorMessages}
                            setErrorMessages={setErrorMessages}
                            DisciplineData={DisciplineData}
                            SpecializationData={SpecializationData}
                            disciplineId={disciplineId}
                            setDisciplineId={setDisciplineId}
                        />
                    )}

                    {step === 4 && (
                        <Story
                            addQuery={addQuery}
                            data={data}
                            errorMessages={errorMessages}
                            setErrorMessages={setErrorMessages}
                        />
                    )}
                    {step === 5 && (
                        <English
                            addQuery={addQuery}
                            data={data}
                            errorMessages={errorMessages}
                            setErrorMessages={setErrorMessages}
                        />
                    )}

                    {step === 6 && <FeeBudget addQuery={addQuery} />}
                    {step === 7 && (
                        <>
                            <div className="flex justify-center items-center flex-col text-xl font-bold">
                                <img
                                    src="/images/SmartMatch/tool/Checkmark.png"
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
                                className="transition-all !w-fit px-6 md:px-20 py-2 rounded-md bg-gradient-to-r from-[#2C79FF] to-[#0953AA] text-sm hover:text-white hover:bg-gradient-to-l"
                                onClick={handleSubmit}
                                icon={<IoArrowForward />}
                                iconPlace
                            />
                        ) : (
                            <Button
                                text="Continue"
                                className="transition-all !w-fit px-6 md:px-20 py-2 rounded-md bg-gradient-to-r from-[#2C79FF] to-[#0953AA] text-sm hover:text-white hover:bg-gradient-to-l"
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
