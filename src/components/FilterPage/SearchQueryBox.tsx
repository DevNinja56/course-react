import { CgSearch } from 'react-icons/cg';
import React, { useState } from 'react';
import { useFilterQuery } from '@/hooks/filterQuery';
import Button from '../Button';
import { useRouter } from 'next/router';
import Select, { StylesConfig } from 'react-select';
import {
    useGetCoursesQuery,
    useGetInstituteQuery
} from '@/store/slices/allRequests';
import { educationalQualifications } from '../SmartMatch/data';
import { ROUTES } from '@/config/constant';

interface Props {
    isLocation?: boolean;
    institutes?: string[];
    courses?: string[];
}

interface Option {
    label: string;
    value: string;
}

const customSelectStyles: StylesConfig = {
    control: (provided) => ({
        ...provided,
        border: 'none',
        boxShadow: 'none',
        '@media only screen and (max-width: 768px)': {
            marginRight: '1.5rem',
            fontSize: '10px',
            padding: '0px'
        }
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'black'
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        display: 'none'
    }),
    option: (provided) => ({
        ...provided,
        fontSize: '14px',
        zIndex: '100'
    })
};

const SearchQueryBox = ({ isLocation }: Props) => {
    const router = useRouter();
    const { data: instituteData } = useGetInstituteQuery();
    const { data: coursesData } = useGetCoursesQuery();

    const [value, setValue] = useState({
        institute: (router.query?.instituteQuery as string) ?? '',
        course: (router.query?.courseQuery as string) ?? '',
        location: (router.query?.locationQuery as string) ?? ''
    });

    const [error, setError] = useState<string | null>(null);
    const { addQuery } = useFilterQuery();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!value.institute && !value.course && !value.location) {
            setError(
                'Please select at least one option (Institute, Course, or Location).'
            );
            return;
        }

        if (value && router.pathname !== ROUTES.INSTITUTES) {
            addQuery({
                ...(value.institute ? { institute: [value.institute] } : null),
                ...(value.course ? { course: [value.course] } : null),
                ...(value.location ? { location: [value.location] } : null)
            });
            setValue({ institute: '', course: '', location: '' });

            router.push({
                pathname: router.pathname,
                query: {
                    ...router.query,
                    instituteQuery: value.institute,
                    courseQuery: value.course,
                    locationQuery: value.location
                }
            });
        }
    };

    const instituteOptions = instituteData?.map((institute) => ({
        value: institute.name,
        label: institute.name
    }));

    const courseOptions = coursesData?.data?.map((course) => ({
        value: course.name,
        label: course.name
    }));

    return (
        <form onSubmit={handleSubmit} className="relative w-full">
            <div className="flex md:gap-3 items-center bg-white custom-shadow rounded-xl w-full p-2">
                <CgSearch className="text-xl md:text-3xl min-w-[40px] md:block hidden" />
                <div className="flex items-center w-full">
                    <Select
                        options={instituteOptions}
                        value={instituteOptions?.find(
                            (option) => option.value === value.institute
                        )}
                        onChange={(selectedOption) =>
                            setValue((prev) => ({
                                ...prev,
                                institute:
                                    (selectedOption as Option)?.value || ''
                            }))
                        }
                        placeholder="Search by institute name"
                        className="min-w-[109px] w-5/12 md:min-w-0 md:w-60 lg:w-[320px]"
                        classNamePrefix="react-select"
                        styles={customSelectStyles}
                    />
                    <div className="w-[1px] bg-black h-full mx-2 bg-opacity-20 overflow-hidden">
                        <span className="invisible">.</span>
                    </div>
                    <Select
                        options={
                            !isLocation
                                ? courseOptions
                                : educationalQualifications?.map((item) => ({
                                      label: item.country,
                                      value: item.country
                                  })) || []
                        }
                        value={courseOptions?.find(
                            (option) => option.value === value.course
                        )}
                        onChange={(selectedOption) =>
                            setValue((prev) => ({
                                ...prev,
                                [isLocation ? 'location' : 'course']:
                                    (selectedOption as Option)?.value || ''
                            }))
                        }
                        placeholder={
                            isLocation
                                ? 'Search by location'
                                : 'Search by course name'
                        }
                        className="min-w-[109px] w-5/12 md:w-60 lg:w-[320px]"
                        styles={customSelectStyles}
                        classNamePrefix="react-select"
                    />
                </div>
                <Button
                    type="submit"
                    text="Search"
                    className="!w-[20%] md:min-w-[100px] py-2 !mb-0 text-[10px] md:text-base rounded-md md:rounded-lg"
                />
            </div>
            {error && <p className="text-red-500 text-xs my-2 mx-5">{error}</p>}
        </form>
    );
};

export default SearchQueryBox;
