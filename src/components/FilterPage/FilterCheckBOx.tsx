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
        const { query, addQuery, removeQuery } = useFilterQuery();
        const state = (query[name] as string[]) ?? [];

        const handleCheckedCountry = (
            e: React.ChangeEvent<HTMLInputElement>
        ) => {
            if (e.target.checked) {
                addQuery({ [name]: [...state, e.target.value] });
            } else {
                state.length > 1
                    ? addQuery({
                          [name]: state.filter(
                              (item) => item !== e.target.value
                          )
                      })
                    : removeQuery(name);
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
                        checked={isChecked! ?? state?.includes(text)}
                        className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor accent-[blueColor] "
                    />
                    <p className="text-sm flex-1 text-grayColor group-hover:text-blueColor ml-2 capitalize line-clamp-1 ">
                        {text}
                    </p>
                </div>
            </label>
        );
    }
);

FilterCheckBox.displayName = 'Filter Checkbox';
