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
    const [value, setValue] = useState({ degrees: '', countries: '' });
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
            value: country.code,
            label: country.name
        })) ?? [];
    const { push } = useRouter();

    const handleClick = () => {
        push({ pathname: ROUTES.FILTER, query: value });
    };

    return (
        <div className="rounded-[10px] bg-white custom-shadow p-2 pl-5 z-20 flex gap-20">
            <div className="bg-white flex items-center justify-between flex-auto  ">
                <div className="flex items-center w-full justify-around ">
                    <ReactSelectCustom
                        options={degreesList}
                        isMulti
                        placeholder="What to Study?....."
                        isLoading={degreeLoading}
                        onChange={(val: any) =>
                            setValue((prev) => ({
                                ...prev,
                                degrees: val
                                    .map((item: selectType) => item.value)
                                    .join()
                            }))
                        }
                    />
                    <ReactSelectCustom
                        options={countriesList}
                        isMulti
                        placeholder="Where to Study?....."
                        isLoading={countryLoading}
                        onChange={(val: any) =>
                            setValue((prev) => ({
                                ...prev,
                                countries: val
                                    .map((item: selectType) => item.value)
                                    .join()
                            }))
                        }
                    />
                </div>
                <div className="w-[230px] ml-5 ">
                    <Button
                        text="Search"
                        onClick={handleClick}
                        disabled={
                            value.countries.length < 1 &&
                            value.degrees.length < 1
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
