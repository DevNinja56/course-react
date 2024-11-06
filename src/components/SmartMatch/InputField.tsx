import React, { useState } from 'react';
import Select, {
    StylesConfig,
    MultiValue,
    SingleValue,
    ActionMeta
} from 'react-select';

interface OptionType {
    value: string;
    label: string;
}

interface InputFieldProps {
    label?: string;
    data?: string[];
    type?: string;
    onSelect?: (value: string) => void;
    selectedValue?: string;
    error?: string;
    useSelect?: boolean;
    options?: OptionType[];
    placeholder?: string;
    onChange?: (
        value: MultiValue<OptionType> | SingleValue<OptionType>,
        actionMeta: ActionMeta<OptionType>
    ) => void;
    isMulti?: boolean;
    isDisabled?: boolean;
    defaultValue?: OptionType;
    gaps?: boolean;
}

export const InputField = ({
    onSelect,
    selectedValue,
    error,
    type = 'string',
    useSelect = false,
    options = [],
    isDisabled,
    onChange,
    defaultValue,
    placeholder = 'Search here to select subjects',
    isMulti = false,
    gaps
}: InputFieldProps) => {
    const [inputValue, setInputValue] = useState(selectedValue);

    const customStyles: StylesConfig<OptionType> = {
        control: (base) => ({
            ...base,
            borderRadius: '10px',
            backgroundColor: '#e2ebfb',
            padding: '0px 4px',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            boxShadow: 'none',
            '&:hover': {
                boxShadow: 'none'
            },
            fontSize: '0.75rem',
            fontWeight: '500',
            opacity: isDisabled ? 0.5 : 1
        }),
        placeholder: (base) => ({
            ...base,
            color: '#727d94'
        }),
        menu: (base) => ({
            ...base,
            fontSize: '0.7rem'
        })
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        if (onSelect) {
            onSelect(value);
        }
    };

    return (
        <div className={`px-2 lg:px-14 ${gaps?"my-5":""} `}>
            {useSelect ? (
                <div className="relative">
                    <Select
                        options={options}
                        onChange={onChange}
                        placeholder={placeholder}
                        isMulti={isMulti}
                        styles={customStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                        value={
                            isMulti
                                ? options.filter((option) =>
                                      selectedValue?.includes(option.value)
                                  )
                                : options.find(
                                      (option) => option.value === selectedValue
                                  )
                        }
                        isDisabled={isDisabled}
                        defaultValue={defaultValue}
                    />
                </div>
            ) : (
                <input
                    type={type}
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    className={`px-4 py-2 rounded-full bg-[#e2ebfb] border-none shadow-none w-full focus:outline-none text-sm placeholder:text-[#727d94] ${isDisabled && 'opacity-50'}`}
                    style={{
                        borderRadius: '10px',
                        backgroundColor: '#e2ebfb',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                    }}
                    disabled={isDisabled}
                />
            )}
            {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
    );
};
