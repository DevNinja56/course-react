import React from 'react';
import { Chip } from '@/components/SmartMatch/Chip';
import {
    ErrorMessages,
    FormData,
    clearError
} from '@/components/SmartMatch/Validation';
import { Countries } from '@/components/SmartMatch/data';

interface NationalityProps {
    data: FormData;
    addQuery: (query: Record<string, string>) => void;
    errorMessages: ErrorMessages;
    setErrorMessages: React.Dispatch<React.SetStateAction<ErrorMessages>>;
}

const Nationality = ({
    data,
    addQuery,
    errorMessages,
    setErrorMessages
}: NationalityProps) => {
    return (
        <>
            <div className="flex gap-1 text-center max-sm:flex-col justify-center items-center">
                <h1 className=" lg:text-xl my-2 font-semibold">
                    What is your country of nationality?
                </h1>
                <img
                    src="/images/SmartMatch/Tool/World.png"
                    alt="world"
                    className="h-6"
                />
            </div>
            <hr className="border h-0.5 bg-blueColor" />
            <Chip
                label="Select your nationality"
                data={Countries}
                onSelect={(value: string) => {
                    addQuery({
                        nationality: value
                    });
                    clearError(errorMessages, setErrorMessages, 'nationality');
                }}
                selectedValue={data.nationality}
                error={errorMessages.nationality}
            />
        </>
    );
};

export default Nationality;
