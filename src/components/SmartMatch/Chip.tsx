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
    dataObj?: { label: string; value: string[]; }[];
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
    dataObj,
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
            color: 'black',
            fontSize: '0.8rem'
        }),
        menu: (base) => ({
            ...base,
            fontSize: '0.8rem'
        })
    };

    const selectedSet = new Set(
        Array.isArray(selectedValue) ? selectedValue : [selectedValue]
    );

    return (
        <div className="px-2 lg:px-14 relative flex flex-col">
            {label && <p className="text-md font-[500] my-2">{label}</p>}
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
                <div className="flex text-sm gap-x-3 gap-y-3 flex-wrap my-2 font-[500]">
                    {(data || dataObj)?.map((item) => {
                        const itemLabel = typeof item === 'string' ? item : item.label;
                        const itemValue = typeof item === 'string' ? item : item.value.join(', ');

                        return (
                            <div
                                onClick={() => onSelect && onSelect(itemValue)}
                                key={'chip-data' + itemLabel}
                                className={`flex items-center px-4 py-2 rounded-full cursor-pointer select-none transition-all ${
                                    selectedSet.has(itemValue)
                                        ? 'bg-[#1058d6] text-white'
                                        : 'bg-[#cee0ff]'
                                }`}
                            >
                                <p>{itemLabel}</p>
                                {onRemove && (
                                    <IoIosClose
                                        className="ml-1 text-white hover:text-blue-200 text-lg"
                                        onClick={() => {
                                            onRemove && onRemove(itemValue);
                                        }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
            {useSelect && (
                <p className="text-xs text-gray-500 mt-1">
                    You can select up to 3 subjects
                </p>
            )}
            {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
    );
};
