/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useUi } from '@/hooks/user-interface';
import Button from '@/components/Button';
import { useForm } from 'react-hook-form';
import { academicInformation, LanguageTestScoreType } from '@/types';
import { useUserAuth } from '@/hooks/auth';
import toast from 'react-hot-toast';
import { fetchRequest } from '@/utils/axios/fetch';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import Select from 'react-select';
import { country_list_with_code } from '@/utils/data/country';

const groupedOptions = [
    {
        label: 'Secondary Education',
        options: [
            { label: 'HSSC', value: 'HSSC' },
            { label: 'A Levels', value: 'A Levels' }
        ]
    },
    {
        label: 'Technical/Vocational Education',
        options: [{ label: 'DAE', value: 'DAE' }]
    },
    {
        label: 'Undergraduate Education',
        options: [
            {
                label: '2 Years Bachelors Degree',
                value: '2 Years Bachelors Degree'
            },
            {
                label: '4 Years Bachelors Degree',
                value: '4 Years Bachelors Degree'
            }
        ]
    },
    {
        label: 'Graduate Education',
        options: [{ label: 'Masters degree', value: 'Masters degree' }]
    }
];

const languageTestScore = {
    "I haven't given any test": [],
    IELTS: ['speaking', 'listening', 'writing', 'reading', 'overAll'],
    PTE: ['speaking', 'listening', 'writing', 'reading', 'overAll'],
    Duolingo: ['overAll'],
    'Language CERT': ['overAll'],
    'Oxford (ELLT)': ['overAll']
};
const languageTestList = Object.keys(languageTestScore);

const UpdateUserAcademicInfo = () => {
    const { hideModal } = useUi();
    const { academicInformation } = useUserAuth()?.user ?? {};
    const { user, refetchUser } = useUserAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [score, setScore] = useState(
        academicInformation
            ? academicInformation?.languageTest?.name
            : languageTestList[0]
    );
    const {
        register,
        unregister,
        handleSubmit: fromSubmit,
        formState: { errors },
        setValue
    } = useForm<academicInformation>();

    const handleSubmit = (body: academicInformation) => {
        if (!body.countryOfEducation) {
            const newValue = academicInformation?.countryOfEducation ?? '';
            body.countryOfEducation = newValue;
        }

        if (!body.highestLevelOfEducation) {
            const newValue = academicInformation?.highestLevelOfEducation ?? '';
            body.highestLevelOfEducation = newValue;
        }

        if (!body.languageTest?.name) {
            const newValue = academicInformation?.languageTest.name ?? '';
            body.languageTest.name = newValue;
        }

        setIsLoading(true);
        toast
            .promise(
                fetchRequest({
                    url: API_ENDPOINTS.USER.UPDATE_PROFILE.replace(
                        ':id',
                        user.id
                    ),
                    type: 'patch',
                    body: { academicInformation: body }
                }),
                {
                    loading: 'Loading...',
                    success: () => {
                        refetchUser();
                        hideModal();
                        return 'User updated successfully';
                    },
                    error: 'An error accord'
                }
            )
            .finally(() => setIsLoading(false));
    };

    return (
        <div
            className="bg-white modal relative border-[3px] border-[#CCCCCC] p-10 rounded-xl "
            style={{ width: '450px' }}
        >
            <IoMdClose
                className="absolute top-3 right-3 cursor-pointer"
                onClick={hideModal}
            />

            <h1 className="text-mainTextColor text-center font-bold text-3xl mb-5">
                Academic Information
            </h1>

            <form
                className="flex flex-col gap-3 "
                onSubmit={fromSubmit(handleSubmit)}
            >
                <div className="w-full">
                    <Select
                        {...register('countryOfEducation', {
                            required: false
                        })}
                        options={Object.entries(country_list_with_code)?.map(
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            ([_, value]) => ({
                                label: value,
                                value
                            })
                        )}
                        placeholder="Select Country"
                        onChange={(e) => {
                            setValue('countryOfEducation', e?.value ?? '');
                        }}
                        defaultValue={{
                            label: academicInformation?.countryOfEducation,
                            value: academicInformation?.countryOfEducation
                        }}
                        styles={{
                            control: (base: any) => ({
                                ...base,
                                border: errors.countryOfEducation?.message
                                    ? '1px solid red'
                                    : '1px solid #717070'
                            })
                        }}
                    />
                    {errors.countryOfEducation?.message && (
                        <span className="text-xs mt-1 text-red-600 ">
                            {errors.countryOfEducation?.message}
                        </span>
                    )}
                </div>
                <div className="w-full">
                    <Select
                        {...register('highestLevelOfEducation', {
                            required: false
                        })}
                        options={groupedOptions}
                        placeholder="Select Level of education"
                        onChange={(e) => {
                            setValue(
                                'highestLevelOfEducation',
                                (e as unknown as { value: string })?.value ?? ''
                            );
                        }}
                        defaultValue={{
                            label: academicInformation?.highestLevelOfEducation,
                            value: academicInformation?.highestLevelOfEducation
                        }}
                        styles={{
                            control: (base: any) => ({
                                ...base,
                                border: errors.highestLevelOfEducation?.message
                                    ? '1px solid red'
                                    : '1px solid #717070'
                            })
                        }}
                    />
                    {errors.highestLevelOfEducation?.message && (
                        <span className="text-xs mt-1 text-red-600 ">
                            {errors.highestLevelOfEducation?.message}
                        </span>
                    )}
                </div>
                <div className="w-full">
                    <Select
                        {...register('languageTest.name', {
                            required: false
                        })}
                        options={languageTestList?.map((test) => ({
                            label: test,
                            value: test
                        }))}
                        placeholder="Select Language Test"
                        onChange={(e) => {
                            setScore(e?.value ?? languageTestList[0]);
                            setValue('languageTest.name', e?.value ?? '');
                            unregister('languageTest.score');
                        }}
                        defaultValue={{
                            label: academicInformation?.languageTest?.name,
                            value: academicInformation?.languageTest?.name
                        }}
                        styles={{
                            control: (base: any) => ({
                                ...base,
                                border: errors?.languageTest?.name?.message
                                    ? '1px solid red'
                                    : '1px solid #717070'
                            })
                        }}
                    />
                    {errors.languageTest?.message && (
                        <span className="text-xs mt-1 text-red-600 ">
                            {errors.languageTest?.message}
                        </span>
                    )}
                </div>

                {
                    <div className="flex gap-2">
                        {languageTestScore[
                            score as unknown as keyof typeof languageTestScore
                        ]?.map((test, i) => (
                            <input
                                key={'input--' + test + i}
                                {...register(
                                    `languageTest.score.${test as LanguageTestScoreType}`,
                                    {
                                        required: `${test} is required`
                                    }
                                )}
                                placeholder={test}
                                className={`border w-1/2 p-1 rounded-md placeholder-shown:text-sm text-sm remove-arrow text-center max-w-[25%] ${
                                    errors?.languageTest?.score?.[
                                        test as LanguageTestScoreType
                                    ]?.message
                                        ? 'border-red-600'
                                        : 'border-grayColor'
                                }`}
                                defaultValue={
                                    academicInformation?.languageTest?.score?.[
                                        test as LanguageTestScoreType
                                    ]
                                }
                                type="number"
                            />
                        ))}
                    </div>
                }
                <Button
                    text="Update"
                    type="submit"
                    className="mt-5 pt-[14px] pb-[13px]"
                    isLoader={isLoading}
                    disabled={isLoading}
                />
            </form>
        </div>
    );
};

export default UpdateUserAcademicInfo;
