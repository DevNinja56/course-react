'use client';
import React, { InputHTMLAttributes, useState } from 'react';
import { IconType } from 'react-icons';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa6';

interface propsType extends InputHTMLAttributes<HTMLInputElement> {
    title?: string;
    icon?: IconType;
    error?: string;
}

const InputBox = React.forwardRef<HTMLInputElement, propsType>(
    (
        { id, className, icon: Icon, error, title, name, type, ...props },
        ref
    ) => {
        const [isShown, setShow] = useState<boolean>(false);
        return (
            <label
                htmlFor={'input-box--' + (id ?? name)}
                className={`text-sm md:text-lg flex flex-col gap-y-1 ${
                    error ? ' text-red-600 ' : 'text-darkGrayColor'
                }`}
            >
                {title}
                <div className="relative">
                    <input
                        {...props}
                        {...{
                            ref,
                            name
                        }}
                        type={
                            type === 'password' && !isShown
                                ? 'password'
                                : 'text'
                        }
                        className={`pt-[10px] pb-[9px] rounded-[10px] w-full outline-none ${
                            error
                                ? 'text-red-600 border border-red-600'
                                : 'text-grayColor border border-grayColor'
                        } ${Icon ? 'pl-12' : 'pl-2.5'} ${className}`}
                        id={'input-box--' + (id ?? name)}
                    />
                    {Icon && (
                        <span className="absolute top-[-4px] md:top-0 left-0 h-[49px] w-[49px] grid place-items-center ">
                            <Icon className="h-4 w-4 md:h-[25px] md:w-[25px]" />
                        </span>
                    )}
                    {type === 'password' && (
                        <span
                            className="absolute top-[-3px] md:top-0 right-0 h-[49px] w-[49px] grid place-items-center cursor-pointer "
                            onClick={() => setShow((prev) => !prev)}
                        >
                            {isShown ? <FaRegEyeSlash /> : <FaRegEye />}
                        </span>
                    )}
                </div>
                {error && (
                    <span className="text-xs mt-1 text-red-600 ">{error}</span>
                )}
            </label>
        );
    }
);

InputBox.displayName = 'InputBox';

export default InputBox;
