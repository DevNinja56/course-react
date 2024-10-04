import { CgSearch } from 'react-icons/cg';
import React, { useState } from 'react';
import { useFilterQuery } from '@/hooks/filterQuery';
import Button from '../Button';
import { useRouter } from 'next/router';

const SearchQueryBox = () => {
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
    return (
        <form onSubmit={handleSubmit} className="relative w-full">
            <div className="flex gap-3 items-center bg-white custom-shadow rounded-xl w-full p-2">
                <CgSearch className="text-3xl min-w-[40px]" />
                <div className="flex items-center">
                    <input
                        className="p-3 outline-none text-base text-mainTextColor w-[320px]"
                        value={value.institute}
                        onChange={({ target }) =>
                            setValue((prev) => ({
                                ...prev,
                                institute: target.value
                            }))
                        }
                        placeholder="Search by Institute name"
                    />
                    <div className="w-[1px] bg-black h-full mx-2 bg-opacity-20 overflow-hidden ">
                        <span className="invisible">.</span>
                    </div>
                    <input
                        className="p-3 outline-none text-base text-mainTextColor w-[320px]"
                        value={value.course}
                        onChange={({ target }) =>
                            setValue((prev) => ({
                                ...prev,
                                course: target.value
                            }))
                        }
                        placeholder="Search by course name"
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
