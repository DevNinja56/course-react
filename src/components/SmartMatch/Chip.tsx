import React from 'react';
import Select, {
    StylesConfig,
    MultiValue,
    SingleValue,
    ActionMeta
} from 'react-select';
import { IoIosSearch, IoIosClose } from 'react-icons/io';

interface OptionType {
    value: string;
    label: string;
}

interface ChipProps {
    label?: string;
    data?: string[];
    onSelect?: (value: string) => void;
    selectedValue?: string | string[];
    error?: string;
    useSelect?: boolean;
    options?: OptionType[];
    placeholder?: string;
    onChange?: (
        value: MultiValue<OptionType> | SingleValue<OptionType>,
        actionMeta: ActionMeta<OptionType>
    ) => void;
    isMulti?: boolean;
    isDisable?: boolean;
    onRemove?: (value: string) => void;
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
    placeholder,
    isMulti = false,
    isDisable,
    onRemove
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
                boxShadow: 'none'
            },
            fontSize: '0.75rem',
            fontWeight: '500',
            paddingLeft: '20px',
            opacity: isDisable ? '0.5' : '1'
        }),
        placeholder: (base) => ({
            ...base,
            color: 'black'
        }),
        menu: (base) => ({
            ...base,
            fontSize: '0.7rem'
        })
    };

    const selectedSet = new Set(
        Array.isArray(selectedValue) ? selectedValue : [selectedValue]
    );

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
                        isMulti={isMulti}
                        styles={customStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                        isDisabled={isDisable}
                        value={null}
                    />
                </div>
            ) : (
                <div className="flex text-[0.7rem] gap-x-3 gap-y-3 flex-wrap my-2 font-[500]">
                    {data?.map((item) => (
                        <div onClick={() => onSelect && onSelect(item)}
                            key={'chip-data' + item}
                            className={`flex items-center px-4 py-2 rounded-full cursor-pointer select-none transition-all ${
                                selectedSet.has(item)
                                    ? 'bg-[#1058d6] text-white'
                                    : 'bg-[#cee0ff]'
                            }`}
                        >
                            <p >
                                {item}
                            </p>
                            {onRemove && (
                                <IoIosClose
                                    className="ml-1 text-white hover:text-blue-200 text-lg"
                                    onClick={() => {
                                        onRemove && onRemove(item);
                                    }}
                                />
                            )}
                        </div>
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
