import React from 'react';

interface propsType {
    id: string;
    name: string;
}

const FilterCheckBOx = ({ id, name }: propsType) => {
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
                    {name}
                </p>
            </div>
        </label>
    );
};

export default FilterCheckBOx;
