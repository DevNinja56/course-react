import React from 'react';
import { Chip } from '@/components/SmartMatch/Chip';
import {
    ErrorMessages,
    FormData,
    clearError
} from '@/components/SmartMatch/Validation';
<<<<<<< HEAD
import { intakesFilterMonths, yearOptions } from '../data';
=======
import { Months, yearOptions } from '../data';
>>>>>>> 79fc4b57b628159a05bec622afa31ab6a96c3551

interface StartIntakeProps {
    data: FormData;
    addQuery: (query: Record<string, string>) => void;
    errorMessages: ErrorMessages;
    setErrorMessages: React.Dispatch<React.SetStateAction<ErrorMessages>>;
}

const StartIntake = ({
    data,
    addQuery,
    errorMessages,
    setErrorMessages
}: StartIntakeProps) => {
    return (
        <>
            <div className="flex  text-center max-sm:flex-col justify-center items-center">
                <h1 className="lg:text-xl my-2 font-semibold">
                    When do you plan to kick-start your studies?
                </h1>
                <img
                    src="/images/SmartMatch/Tool/Calendar.png"
                    alt="world"
                    className="h-6"
                />
            </div>
            <hr className="border h-0.5 bg-blueColor" />

            <Chip
                label="Start Year"
                data={yearOptions}
                onSelect={(value: string) => {
                    addQuery({
                        year: value
                    });
                    clearError(errorMessages, setErrorMessages, 'year');
                }}
                selectedValue={data.year}
                error={errorMessages.year}
            />

            {data.year && (
                <>
                    <hr className="border h-0.5 bg-blueColor" />
                    <Chip
                        label="Start Month"
<<<<<<< HEAD
                        dataObj={intakesFilterMonths.map((item)=>({label:item.label,value:item.value}))}
=======
                        data={Months}
>>>>>>> 79fc4b57b628159a05bec622afa31ab6a96c3551
                        onSelect={(value: string) => {
                            addQuery({
                                month: value
                            });
                            clearError(
                                errorMessages,
                                setErrorMessages,
                                'month'
                            );
                        }}
                        selectedValue={data.month}
                        error={errorMessages.month}
                    />
                </>
            )}
        </>
    );
};

export default StartIntake;
