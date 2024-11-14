import ContentLoader from 'react-content-loader';
import { useFilterQuery } from '@/hooks/filterQuery';
import React, { InputHTMLAttributes } from 'react';

interface propsType extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    text: string;
    customF?: () => void;
    isChecked?: boolean;
    count?: number;
}

export const FilterCheckBox = React.forwardRef<HTMLInputElement, propsType>(
    ({ id, text, name = '', customF, isChecked, count, ...props }, ref) => {
        const { query, addQuery, removeQuery } = useFilterQuery();
        const state: string[] = Array.isArray(query[name])
            ? (query[name] as string[])
            : [query[name] as string];

        const handleCheckedCountry = (
            e: React.ChangeEvent<HTMLInputElement>
        ) => {
            if (e.target.checked) {
                addQuery({
                    [name]: state
                        ? [...state.filter((q) => !!q), e.target.value]
                        : [e.target.value]
                });
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
                className="w-full py-[6px] hover:bg-profileBgColor px-0.5  flex gap-x-2 group select-none cursor-pointer "
                htmlFor={id}
            >
                <div className="relative flex items-center w-full gap-1">
                    <input
                        {...props}
                        id={id}
                        type="checkbox"
                        ref={ref}
                        onChange={customF! ?? handleCheckedCountry}
                        checked={isChecked! ?? state?.includes(text)}
                        className="h-3.5 w-3.5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor accent-[blueColor]"
                    />
                    <p className="text-sm font-semibold flex-1 text-black group-hover:text-blueColor ml-2 capitalize line-clamp-1 flex justify-between w-full items-center">
                        <span>{text}</span>
                        {(count && count > 1 )&& (
                            <span className="text-gray-500 py-1 px-2  text-xs bg-gray-100 rounded-lg">
                                {count}
                            </span>
                        )}
                    </p>
                </div>
            </label>
        );
    }
);

FilterCheckBox.displayName = 'Filter Checkbox';

export const FilterCheckBoxLoader = ({ length = 5 }: { length?: number }) => (
    <div className="flex flex-col gap-3 px-3">
        {Array.from({ length }).map((_, i) => (
            <ContentLoader
                key={'filter--checkbox--' + i}
                speed={2}
                width={200}
                height={20}
                viewBox="0 0 200 20"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="2" ry="2" width="200" height="20" />
            </ContentLoader>
        ))}
    </div>
);
