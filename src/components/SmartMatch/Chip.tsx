import React from 'react';
import Select, { StylesConfig, MultiValue, SingleValue, ActionMeta } from 'react-select';
import { IoIosSearch } from 'react-icons/io';

interface OptionType {
    value: string;
    label: string;
}

interface ChipProps {
    label?: string;
    data?: string[];
    onSelect?: (value: string) => void;
    selectedValue?: string;
    error?: string;
    useSelect?: boolean;
    options?: OptionType[];
    placeholder?: string;
    onChange?: (value: MultiValue<OptionType> | SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) => void; 
    isMulti?: boolean; 
}

export const Chip: React.FC<ChipProps> = ({
    label,
    data,
    onSelect,
    selectedValue,
    error,
    useSelect = false,
    options = [],
    onChange,
    placeholder = 'Search here to select subjects',
    isMulti = false, 
}) => {
    const customStyles: StylesConfig<OptionType> = {
        control: (base) => ({
            ...base,
            borderRadius: '20px',
            backgroundColor: '#cee0ff',
            padding: '0px 4px',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            boxShadow: 'none',
            '&:hover': {
                boxShadow: 'none',
            },
            fontSize: '0.75rem',
            fontWeight: '500',
            paddingLeft: '20px',
        }),
        placeholder: (base) => ({
            ...base,
            color: 'black',
        }),
        menu: (base) => ({
            ...base,
            fontSize: '0.7rem',
        }),
    };

    return (
        <div className="px-2 lg:px-14 relative flex flex-col">
            {label && <p className="text-xs font-[500] mb-2">{label}</p>}
            {useSelect ? (
                <div className="relative">
                    <IoIosSearch className="absolute top-2.5 left-3 text-gray-500 z-10" />
                    <Select
                        options={options}
                        onChange={onChange} 
                        placeholder={placeholder}
                        isClearable
                        isMulti={isMulti} 
                        styles={customStyles}
                        components={{
                            IndicatorSeparator: () => null,
                        }}
                    />
                </div>
            ) : (
                <div className="flex text-[0.7rem] gap-x-3 gap-y-3 flex-wrap my-2 font-[500]">
                    {data?.map((item) => (
                        <p
                            key={'chip-data' + item}
                            onClick={() => onSelect && onSelect(item)} 
                            className={`px-4 py-2 rounded-full cursor-pointer select-none transition-all ${
                                selectedValue === item
                                    ? 'bg-[#1058d6] text-white'
                                    : 'bg-[#cee0ff]'
                            }`}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            )}
            {error && <p className="text-red-500 text-xs">{error}</p>}
            {useSelect && (
                <p className="text-xs text-gray-500 mt-1">
                    You can select up to 3 subjects
                </p>
            )}
        </div>
    );
};
