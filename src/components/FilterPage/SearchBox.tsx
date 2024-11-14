import React, { useEffect, useState } from 'react';



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
    const [showInput, setShowInput] = useState<boolean>(true);

    useEffect(() => {
        if (!showInput) {
            searchVal('');
        }
    }, [showInput]);

    return (
        <div className={`flex justify-end w-full ${className}`}>
            <div
                className={`bg-white rounded-md overflow-hidden p-x-0.5 py-1.5 flex ${
                    showInput && 'w-full border'
                }`}
            >
                <input
                    type="text"
                    placeholder={placeholder}
                    className={`bg-transparent transition-all duration-150 pl-3 focus-visible:outline-none outline-none text-xs placeholder:text-xs ${
                        showInput ? 'w-[calc(100%-20px)] inline-block' : 'w-[0px] hidden'
                    }`}
                    onChange={(e) => searchVal(e.target.value)}
                    value={value}
                    autoFocus={showInput} 
                />
                <button
                    className="px-2 cursor-pointer"
                    onClick={() => setShowInput((prev) => !prev)}
                    title={showInput ? 'Hide Input' : 'Show Input'}
                >
                    {/* {showInput ? <RiCloseFill /> : <CgSearch />} */}
                </button>
            </div>
        </div>
    );
};

export default SearchBox;
