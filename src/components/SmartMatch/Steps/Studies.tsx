import React from 'react';
import { Chip } from '@/components/SmartMatch/Chip';
import {
    ErrorMessages,
    FormData,
    clearError
} from '@/components/SmartMatch/Validation';
import { disciplineType, OptionType } from '@/types';

interface StudiesProps {
    data: FormData;
    addQuery: (query: Record<string, string | string[]>) => void;
    errorMessages: ErrorMessages;
    setErrorMessages: React.Dispatch<React.SetStateAction<ErrorMessages>>;
    DisciplineData?: disciplineType[];
    setDisciplineId: React.Dispatch<React.SetStateAction<string>>;
    disciplineId: string;
}

const Studies = ({
    data,
    addQuery,
    errorMessages,
    setErrorMessages,
    DisciplineData
}: StudiesProps) => {
    const handleAddDiscipline = (value: string) => {
        const existingDisciplines = Array.isArray(data.discipline)
            ? data.discipline
            : [];
        if (
            !existingDisciplines.includes(value) &&
            existingDisciplines.length < 3
        ) {
            const updatedDisciplines = [...existingDisciplines, value];
            addQuery({ discipline: updatedDisciplines });
            clearError(errorMessages, setErrorMessages, 'discipline');
        }
    };

    const handleRemoveDiscipline = (value: string) => {
        const existingDisciplines = Array.isArray(data.discipline)
            ? data.discipline
            : [];
        const updatedDisciplines = existingDisciplines.filter(
            (item) => item !== value
        );
        addQuery({ discipline: updatedDisciplines });
    };

    return (
        <>
            <div className="flex gap-1 text-center max-sm:flex-col justify-center items-center">
                <h1 className="lg:text-xl font-semibold">
                    What do you wish to study?
                </h1>
                <img
                    src="/images/SmartMatch/Tool/Book.png"
                    alt="world"
                    className="h-6"
                />
            </div>
            <hr className="border h-0.5 bg-blueColor" />
            <div className="overflow-y-scroll setScrollBar h-[43vh] overflow-x-hidden">
                <Chip
                    label="Study Level"
                    data={['Foundation', 'Undergraduate', 'Postgraduate']}
                    onSelect={(value: string) => {
                        addQuery({ studyLevel: value });
                        clearError(
                            errorMessages,
                            setErrorMessages,
                            'studyLevel'
                        );
                    }}
                    selectedValue={data.studyLevel}
                    error={errorMessages.studyLevel}
                />

                <div className="mt-4">
                    <Chip
                        label="Search Subjects"
                        useSelect
                        options={DisciplineData?.map((item) => ({
                            label: item.name,
                            value: item.name
                        }))}
                        onChange={(option) => {
                            const selectedValue = (option as OptionType).value;
                            handleAddDiscipline(selectedValue);
                        }}
                        placeholder="Search here to select subjects"
                        error={errorMessages.discipline}
                        isDisable={!DisciplineData?.length}
                    />

                    <Chip
                        data={
                            Array.isArray(data.discipline)
                                ? data.discipline
                                : []
                        }
                        onRemove={(value) => handleRemoveDiscipline(value)}
                        selectedValue={
                            Array.isArray(data.discipline)
                                ? data.discipline
                                : []
                        }
                    />

                    <Chip
                        label="Popular Searches"
                        data={DisciplineData?.map((item) => item.name) || []}
                        onSelect={(value: string) => handleAddDiscipline(value)}
                        selectedValue={
                            Array.isArray(data.discipline)
                                ? data.discipline
                                : []
                        }
                        error={errorMessages.discipline}
                    />
                </div>
            </div>
        </>
    );
};

export default Studies;
