/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import ReactSelectCustom from '../Select';
import Button from '../Button';
import {
    useGetCountriesQuery,
    useGetDegreesQuery
} from '@/store/slices/allRequests';
import { useRouter } from 'next/router';
import { ROUTES } from '@/config/constant';

export type selectType = {
    value: string;
    label: string;
};

const SearchBox = () => {
    const [value, setValue] = useState({ degrees: [], countries: [] });
    const { data: countries, isLoading: countryLoading } =
        useGetCountriesQuery();
    const { data: degrees, isLoading: degreeLoading } = useGetDegreesQuery();
    const degreesList =
        degrees?.map((degree) => ({
            value: degree.name,
            label: degree.name
        })) ?? [];

    const countriesList =
        countries?.map((country) => ({
            value: country.name,
            label: country.name
        })) ?? [];
    const { push } = useRouter();

    const handleClick = () => {
        push({
            pathname: ROUTES.FILTER_COURSE,
            query: {
                degrees: value.degrees.join(','),
                countries: value.countries.join(',')
            }
        });
    };

    return (
        <div className="rounded-[10px] bg-white custom-shadow p-2 px-6 lg:px-2 md:pl-5 z-20 flex gap-20 py-5 lg:py-2">
            <div className="bg-white flex flex-col md:flex-row items-center justify-between flex-auto gap-y-5 gap-x-5 lg:gap-x-0">
                <div className="flex flex-col gap-y-4 md:flex-row items-center w-full justify-around ">
                    <div className="w-full border border-gray-300 md:border-none">
                        <ReactSelectCustom
                            options={degreesList}
                            isMulti
                            placeholder="What to Study?"
                            isLoading={degreeLoading}
                            onChange={(val: any) =>
                                setValue((prev) => ({
                                    ...prev,
                                    degrees: val.map(
                                        (item: selectType) => item.value
                                    )
                                }))
                            }
                        />
                    </div>
                    <div className="w-full border border-gray-300 md:border-none">
                        <ReactSelectCustom
                            options={countriesList}
                            isMulti
                            placeholder="Where to Study?"
                            isLoading={countryLoading}
                            onChange={(val: any) =>
                                setValue((prev) => ({
                                    ...prev,
                                    countries: val.map(
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
                            !value.degrees.length || !value.countries.length
                        }
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
