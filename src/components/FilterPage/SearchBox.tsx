import React, { useEffect, useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { RiCloseFill } from 'react-icons/ri';

const SearchBox = ({
    searchVal,
    className,
    placeholder = 'search',
    value
}: {
    searchVal: (value: string) => void;
    className?: string;
    placeholder?: string;
    value: string;
}) => {
    const [showInput, setShowInput] = useState<boolean>(false);
    useEffect(() => {
        if (!showInput) {
            searchVal('');
        }
    }, [showInput]);
    return (
        <div className={`flex justify-end w-full ${className}`}>
            <div
                className={`input-con bg-white rounded-full overflow-hidden p-1 flex ${
                    showInput && 'w-full'
                }`}
            >
                <input
                    type="text"
                    placeholder={placeholder}
                    className={`bg-transparent transition-all duration-150 pl-3 text-sm focus-visible:outline-none outline-none ${
                        showInput
                            ? 'w-[calc(100%-20px)] inline-block'
                            : 'w-[0px] hidden'
                    }`}
                    onChange={(e) => searchVal(e.target.value)}
                    value={value}
                />
                <button
                    className="px-2 cursor-pointer"
                    onClick={() => setShowInput((prev) => !prev)}
                    title={showInput ? 'Hide Input' : 'Show Input'}
                >
                    {showInput ? <RiCloseFill /> : <CgSearch />}
                </button>
            </div>
        </div>
    );
};

export default SearchBox;
