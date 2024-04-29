import React from 'react';

interface InputWithBtnProps {
    btnText?: string;
    label?: string;
    placeHolder?: string;
    onSubmit?: (inputValue: string) => void;
}

const InputWithBtn: React.FC<InputWithBtnProps> = ({
    btnText,
    label,
    placeHolder,
    onSubmit
}) => {
    const randomId = Math.random().toString(36).substring(7);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const inputValue = formData.get('inputValue') as string;
        onSubmit?.(inputValue);
    };
    return (
        <form className="max-w-md mx-auto w-full" onSubmit={handleSubmit}>
            <label
                htmlFor={randomId}
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
                {label ?? 'Label'}
            </label>
            <div className="relative">
                <input
                    type="text"
                    id={randomId}
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
                    placeholder={placeHolder ?? 'Search Mockups, Logos...'}
                    required
                    name="inputValue"
                />
                <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 "
                >
                    {btnText ?? 'btnText'}
                </button>
            </div>
        </form>
    );
};

export default InputWithBtn;
