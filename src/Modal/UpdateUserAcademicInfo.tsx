/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useUi } from '@/hooks/user-interface';
import Button from '@/components/Button';
import { useForm } from 'react-hook-form';
import { academicInformation } from '@/types';
import { useUserAuth } from '@/hooks/auth';
import toast from 'react-hot-toast';
import { fetchRequest } from '@/utils/axios/fetch';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import Select from 'react-select';
import { country_list } from '@/utils/data/country';

export const levelOfEducationList = [
    'HSSE',
    'A Levels',
    'DAE',
    '2 Years Bachelors Degree',
    '4 Years Bachelors Degree',
    ' Masters degree'
];
export const languageTestList = [
    "I don't have any test",
    'IELTS',
    ' PTE',
    ' TOFEL',
    ' Language CERT',
    ' Oxford (ELLT)'
];

const UpdateUserAcademicInfo = () => {
    const { hideModal } = useUi();
    const { user, refetchUser } = useUserAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [score, setScore] = useState(false);
    const {
        register,
        handleSubmit: fromSubmit,
        formState: { errors },
        setValue
    } = useForm<academicInformation>();

    const handleSubmit = (body: academicInformation) => {
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
                            required: 'Country is required'
                        })}
                        options={country_list?.map((country) => ({
                            label: country,
                            value: country
                        }))}
                        placeholder="Select Country"
                        onChange={(e) => {
                            setValue('countryOfEducation', e?.value ?? '');
                        }}
                        styles={{
                            control: (base) => ({
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
                            required: 'Level of education is required'
                        })}
                        options={levelOfEducationList?.map((level) => ({
                            label: level,
                            value: level
                        }))}
                        placeholder="Select Level of education"
                        onChange={(e) => {
                            setValue('highestLevelOfEducation', e?.value ?? '');
                        }}
                        styles={{
                            control: (base) => ({
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
                            required: 'Language Test is required'
                        })}
                        options={languageTestList?.map((test) => ({
                            label: test,
                            value: test
                        }))}
                        placeholder="Select Language Test"
                        onChange={(e) => {
                            e?.value !== "I don't have any test"
                                ? setScore(true)
                                : setScore(false);
                            setValue('languageTest.name', e?.value ?? '');
                        }}
                        styles={{
                            control: (base) => ({
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

                {score && (
                    <div className="flex gap-2">
                        <input
                            {...register('languageTest.score.speaking', {
                                required: `Speaking is required`
                            })}
                            min={1}
                            max={100}
                            placeholder={'Speaking'}
                            className={`border w-1/2 p-1 rounded-md placeholder-shown:text-sm text-sm ${
                                errors?.languageTest?.score?.speaking?.message
                                    ? 'border-red-600'
                                    : 'border-grayColor'
                            }`}
                            type="number"
                        />
                        <input
                            {...register('languageTest.score.listening', {
                                required: `Listening is required`
                            })}
                            min={1}
                            max={100}
                            placeholder={'Listening'}
                            className={`border w-1/2 p-1 rounded-md placeholder-shown:text-sm text-sm ${
                                errors?.languageTest?.score?.listening?.message
                                    ? 'border-red-600'
                                    : 'border-grayColor'
                            }`}
                            type="number"
                        />
                        <input
                            {...register('languageTest.score.writing', {
                                required: `writing is required`
                            })}
                            min={1}
                            max={100}
                            placeholder={'Writing'}
                            className={`border w-1/2 p-1 rounded-md placeholder-shown:text-sm text-sm ${
                                errors?.languageTest?.score?.writing?.message
                                    ? 'border-red-600'
                                    : 'border-grayColor'
                            }`}
                            type="number"
                        />
                        <input
                            {...register('languageTest.score.reading', {
                                required: `Reading is required`
                            })}
                            min={1}
                            max={100}
                            placeholder={'Reading'}
                            className={`border w-1/2 p-1 rounded-md placeholder-shown:text-sm text-sm ${
                                errors?.languageTest?.score?.reading?.message
                                    ? 'border-red-600'
                                    : 'border-grayColor'
                            }`}
                            type="number"
                        />
                    </div>
                )}
                <Button
                    text="Update"
                    type="submit"
                    className="mt-5"
                    isLoader={isLoading}
                    disabled={isLoading}
                />
            </form>
        </div>
    );
};

export default UpdateUserAcademicInfo;
