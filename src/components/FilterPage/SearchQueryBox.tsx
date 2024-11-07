import { CgSearch } from 'react-icons/cg';
import React, { useState } from 'react';
import { useFilterQuery } from '@/hooks/filterQuery';
import Button from '../Button';
import { useRouter } from 'next/router';
import Select, { StylesConfig } from 'react-select';

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
        boxShadow: 'none'
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

        fontSize: '12px'
    })
};

const SearchQueryBox = ({ isLocation, institutes, courses }: Props) => {
    const { query } = useRouter();
    const [value, setValue] = useState({
        institute: (query?.instituteQuery as string) ?? '',
        course: (query?.courseQuery as string) ?? ''
    });
    const { addQuery } = useFilterQuery();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value) {
            addQuery({
                ...(value.institute
                    ? { instituteQuery: [value.institute] }
                    : null),
                ...(value.course ? { courseQuery: [value.course] } : null)
            });
            setValue({ institute: '', course: '' });
        }
    };

    const instituteOptions = institutes?.map((institute) => ({
        value: institute,
        label: institute
    }));

    const courseOptions = courses?.map((course) => ({
        value: course,
        label: course
    }));

    return (
        <form onSubmit={handleSubmit} className="relative w-full">
            <div className="flex gap-3 items-center bg-white custom-shadow rounded-xl w-full p-2">
                <CgSearch className="text-3xl min-w-[40px]" />
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
                        placeholder="Select Institute"
                        className="w-[320px]"
                        classNamePrefix="react-select"
                        styles={customSelectStyles}
                    />
                    <div className="w-[1px] bg-black h-full mx-2 bg-opacity-20 overflow-hidden">
                        <span className="invisible">.</span>
                    </div>
                    <Select
                        options={courseOptions}
                        value={courseOptions?.find(
                            (option) => option.value === value.course
                        )}
                        onChange={(selectedOption) =>
                            setValue((prev) => ({
                                ...prev,
                                course: (selectedOption as Option)?.value || ''
                            }))
                        }
                        placeholder={
                            isLocation ? 'Select Location' : 'Select Course'
                        }
                        className="w-[320px]"
                        styles={customSelectStyles}
                        classNamePrefix="react-select"
                    />
                </div>
                <Button
                    type="submit"
                    text="Search"
                    className="min-w-[100px] py-2 !mb-0"
                />
            </div>
        </form>
    );
};

export default SearchQueryBox;
