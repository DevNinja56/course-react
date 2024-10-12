import React, { useEffect, useState } from 'react';
import { PiUploadBold } from 'react-icons/pi';

interface PropsType extends React.InputHTMLAttributes<HTMLInputElement> {
    placeHolder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    exemptFileType?: string[];
    defaultsValue?: string;
    showFileName?: boolean;
}

const InputFile = React.forwardRef(
    (
        {
            placeHolder,
            onChange,
            exemptFileType,
            defaultsValue,
            showFileName = true,
            ...props
        }: PropsType,
        ref: React.Ref<HTMLInputElement>
    ) => {
        const [fileName, setFileName] = useState<string>('');

        useEffect(() => {
            if (defaultsValue && defaultsValue) {
                setFileName(defaultsValue);
            }
        }, [defaultsValue]);

        const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                if (exemptFileType && exemptFileType?.includes(file.type)) {
                    setFileName('');
                } else {
                    setFileName(file.name);
                }
            }
            onChange(e);
        };

        return (
            <div className="my-2">
                <label className="cursor-pointer focus:outline-none flex justify-between items-center relative">
                    <input
                        {...props}
                        ref={ref}
                        className="absolute inset-0 hidden cursor-pointer"
                        type="file"
                        onChange={handleFileChange}
                    />
                    <span className="text-gray-400 flex outline-none border w-full px-3 rounded-md text-xs 2xl:text-lg py-2.5 capitalize bg-white focus:border-mainColor transition-all duration-300 items-center justify-between">
                        {!showFileName ? placeHolder : fileName || placeHolder}
                        <PiUploadBold className="text-[1rem]" />
                    </span>
                </label>
            </div>
        );
    }
);

InputFile.displayName = 'InputFile';

export default InputFile;
