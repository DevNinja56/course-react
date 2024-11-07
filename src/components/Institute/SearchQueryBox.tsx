import React, { useState } from 'react';
import { useFilterQuery } from '@/hooks/filterQuery';
import Button from '../Button';
import { useRouter } from 'next/router';
import Select, { OnChangeValue, SingleValue, StylesConfig } from 'react-select';

interface SearchQueryBoxState {
    institute: string;
    course: string;
    grade?: string;
}

interface Option {
    value: string;
    label: string;
}

const SearchQueryBox: React.FC = () => {
    const { query } = useRouter();
    const [value, setValue] = useState<SearchQueryBoxState>({
        institute: (query?.instituteQuery as string) ?? '',
        course: (query?.courseQuery as string) ?? ''
    });
    const { addQuery } = useFilterQuery();

    const handleSelectChange = (
        selectedOption: OnChangeValue<Option, false>,
        name: string
    ): void => {
        setValue((prev) => ({
            ...prev,
            [name]: selectedOption ? (selectedOption as Option).value : ''
        }));
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (value) {
            addQuery({
                ...(value.institute
                    ? { instituteQuery: [value.institute] }
                    : null),
                ...(value.course ? { courseQuery: [value.course] } : null),
                ...(value.grade ? { gradeQuery: [value.grade] } : null)
            });
            setValue({ institute: '', course: '', grade: '' });
        }
    };

    const instituteOptions = [
        { value: 'institute1', label: 'Institute 1' },
        { value: 'institute2', label: 'Institute 2' },
        { value: 'institute3', label: 'Institute 3' }
    ];

    const courseOptions = [
        { value: 'course1', label: 'Course 1' },
        { value: 'course2', label: 'Course 2' },
        { value: 'course3', label: 'Course 3' }
    ];

    const customSelectStyles: StylesConfig = {
        control: (provided) => ({
            ...provided,
            border: 'none',
            boxShadow: 'none',
            minHeight: '30px',
            fontSize: '12px'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'black',
            fontSize: '12px'
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            display:"none"
        }),
        option: (provided) => ({
            ...provided,

            fontSize: '12px'
        })
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full">
            <div className="flex gap-2 items-center bg-white custom-shadow rounded-xl p-1">
                <div className="flex items-center gap-1">
                    <Select
                        options={instituteOptions}
                        placeholder="Search by Institute Name"
                        styles={customSelectStyles}
                        onChange={(option) =>
                            handleSelectChange(
                                option as SingleValue<Option>,
                                'institute'
                            )
                        }
                        value={instituteOptions.find(
                            (opt: Option) => opt.value === value.institute
                        )}
                    />
                    <div className="w-[1px] bg-gray-300 h-full mx-2">
                        <span className="invisible">.</span>
                    </div>{' '}
                    <Select
                        options={courseOptions}
                        placeholder="Search by Location"
                        styles={customSelectStyles}
                        onChange={(option) =>
                            handleSelectChange(
                                option as SingleValue<Option>,
                                'course'
                            )
                        }
                        value={courseOptions.find(
                            (opt: Option) => opt.value === value.course
                        )}
                    />
                   
                    <Button
                        type="submit"
                        text="Search"
                        className="py-2 px-6 text-xs !rounded-md !mb-0 mx-2 !w-fit"
                    />
                </div>
            </div>
        </form>
    );
};

export default SearchQueryBox;
