import { useFilterQuery } from '@/hooks/filterQuery';
import React, { InputHTMLAttributes } from 'react';

interface propsType extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    text: string;
    customF?: () => void;
    isChecked?: boolean;
}

export const FilterCheckBox = React.forwardRef<HTMLInputElement, propsType>(
    ({ id, text, name = '', customF, isChecked, ...props }, ref) => {
        const { query, addQuery } = useFilterQuery();
        const state = (query[name] as string[]) ?? [];

        const handleCheckedCountry = (
            e: React.ChangeEvent<HTMLInputElement>
        ) => {
            if (e.target.checked) {
                addQuery({ [name]: [...state, e.target.value] });
            } else {
                addQuery({
                    [name]: state.filter((item) => item !== e.target.value)
                });
            }
        };
        return (
            <label
                className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group select-none cursor-pointer "
                htmlFor={id}
            >
                <div className="relative flex items-center">
                    <input
                        {...props}
                        id={id}
                        type="checkbox"
                        ref={ref}
                        onChange={customF! ?? handleCheckedCountry}
                        checked={isChecked! ?? state?.includes(id)}
                        className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                    />
                    <svg
                        className="absolute left-1 cursor-pointer"
                        width="13"
                        height="10"
                        viewBox="0 0 13 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 4L4 8.5L12 1"
                            className="stroke-white cursor-pointer"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p className="text-sm text-grayColor group-hover:text-blueColor ml-2 capitalize ">
                        {text}
                    </p>
                </div>
            </label>
        );
    }
);

FilterCheckBox.displayName = 'Filter Checkbox';

const FilterCheckBOx = ({ id, text }: propsType) => {
    return (
        <label
            className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group"
            htmlFor={id}
        >
            <div className="relative flex items-center">
                <input
                    name="input_box_1"
                    id={id}
                    type="checkbox"
                    className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                />
                <svg
                    className="absolute left-1 cursor-pointer"
                    width="13"
                    height="10"
                    viewBox="0 0 13 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 4L4 8.5L12 1"
                        className="stroke-white cursor-pointer"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <p className="text-sm text-grayColor group-hover:text-blueColor ml-2 capitalize ">
                    {text}
                </p>
            </div>
        </label>
    );
};

export default FilterCheckBOx;
