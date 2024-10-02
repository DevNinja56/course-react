/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import ReactSelectCustom from '../Select';
import Button from '../Button';
import {
    useGetDisciplineQuery,
    useGetInstituteQuery
} from '@/store/slices/allRequests';
import { useRouter } from 'next/router';
import { ROUTES } from '@/config/constant';

export type selectType = {
    value: string;
    label: string;
};

const SearchBox = () => {
    const [value, setValue] = useState({ disciplines: [], institutes: [] });
    const { data: institutes, isLoading: instituteLoading } =
        useGetInstituteQuery();
    const { data: disciplines, isLoading: degreeLoading } =
        useGetDisciplineQuery();
    const disciplinesList =
        disciplines?.map((degree) => ({
            value: degree.name,
            label: degree.name
        })) ?? [];

    const institutesList =
        institutes?.map((country) => ({
            value: country.name,
            label: country.name
        })) ?? [];
    const { push } = useRouter();

    const handleClick = () => {
        push({
            pathname: ROUTES.FILTER_COURSE,
            query: {
                disciplines: value.disciplines.join(','),
                institutes: value.institutes.join(',')
            }
        });
    };

    return (
        <div className="rounded-[10px] bg-white custom-shadow p-2 px-6 lg:px-2 md:pl-5 z-20 flex gap-20 py-5 lg:py-2">
            <div className="bg-white flex flex-col md:flex-row items-center justify-between flex-auto gap-y-5 gap-x-5 lg:gap-x-0">
                <div className="flex flex-col gap-y-4 md:flex-row items-center w-full justify-around ">
                    <div className="w-full border border-gray-300 md:border-none">
                        <ReactSelectCustom
                            options={institutesList}
                            isMulti
                            placeholder="Where to Study?"
                            isLoading={instituteLoading}
                            onChange={(val: any) =>
                                setValue((prev) => ({
                                    ...prev,
                                    institute: val.map(
                                        (item: selectType) => item.value
                                    )
                                }))
                            }
                        />
                    </div>
                    <div className="w-full border border-gray-300 md:border-none">
                        <ReactSelectCustom
                            options={disciplinesList}
                            isMulti
                            placeholder="What to Study?"
                            isLoading={degreeLoading}
                            onChange={(val: any) =>
                                setValue((prev) => ({
                                    ...prev,
                                    discipline: val.map(
                                        (item: selectType) => item.value
                                    )
                                }))
                            }
                        />
                    </div>
                </div>
                <div className="w-full md:w-[230px] ml-0 lg:ml-5">
                    <Button
                        className="pt-[14px] pb-[13px]"
                        text="Search"
                        disabled={
                            !value.disciplines.length ||
                            !value.institutes.length
                        }
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
