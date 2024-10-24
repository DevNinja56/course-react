import React from 'react';

interface InputFieldProps {
    placeholder: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | undefined; 
    min?: number;
    max?: number;
    disabled?: boolean | undefined;
    isError?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
    placeholder,
    type = 'text',
    onChange,
    value,
    disabled,
    isError = false
}) => {
    return (
        <input
            className={`mt-4 py-3 px-4 bg-[#e9f1ff] rounded-md border ${isError ? 'border-red-600' : 'border-blue-200'} focus:border-blue-600 focus:ring-0 placeholder:text-[#2C79FF] font-normal w-[80%]`}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={value}
            disabled={disabled}
        />
    );
};

export default InputField;
