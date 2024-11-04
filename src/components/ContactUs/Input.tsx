import React, { InputHTMLAttributes, useState } from 'react';
import { IconType } from 'react-icons';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa6';

interface propsType extends InputHTMLAttributes<HTMLInputElement> {
    title?: string;
    icon?: IconType;
    error?: string;
    customInputClass?: string;
    type?: 'text' | 'password' | 'dob' | 'tel';
}

const InputBox = React.forwardRef<HTMLInputElement, propsType>(
    (
        {
            id,
            className,
            icon: Icon,
            error,
            title,
            name,
            type,
            customInputClass = null,
            ...props
        },
        ref
    ) => {
        const [isShown, setShow] = useState<boolean>(false);
        return (
            <label
                htmlFor={'input-box--' + (id ?? name)}
                className={`text-[0.6rem] flex flex-col gap-y-1 w-full ${
                    error ? 'text-red-600' : 'text-gray-500'
                }`}
            >
                {title && <span className="font-semibold">{title}</span>}
                <div className="relative">
                    <input
                        {...props}
                        {...{
                            ref,
                            name,
                            type: type === 'password' && !isShown ? 'password' : type === 'dob' ? 'date' : 'text'
                        }}
                        className={`py-2 px-4 rounded-md w-full outline-none bg-[#ecf3ff] ${
                            error
                                ? 'border-red-600 text-red-600'
                                : 'border-gray-300 text-gray-700'
                        } placeholder-gray-400 focus:ring-2 focus:ring-blue-500 ${
                            Icon ? 'pl-12' : 'pl-4'
                        } ${className} ${customInputClass}`}
                        id={'input-box--' + (id ?? name)}
                    />
                    {Icon && (
                        <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
                            <Icon className="w-5 h-5" />
                        </span>
                    )}
                    {type === 'password' && (
                        <span
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-500"
                            onClick={() => setShow((prev) => !prev)}
                        >
                            {isShown ? <FaRegEyeSlash /> : <FaRegEye />}
                        </span>
                    )}
                </div>
                {error && (
                    <span className="text-xs mt-1 text-red-600">
                        {error}
                    </span>
                )}
            </label>
        );
    }
);

InputBox.displayName = 'InputBox';

export default InputBox;
