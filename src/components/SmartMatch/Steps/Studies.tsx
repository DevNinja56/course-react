import React from 'react';
import { Chip } from '@/components/SmartMatch/Chip';
import {
    ErrorMessages,
    FormData,
    clearError
} from '@/components/SmartMatch/Validation';
import { disciplineType, OptionType, specializationDataType } from '@/types';

interface StudiesProps {
    data: FormData;
    addQuery: (query: Record<string, string | string[]>) => void;
    errorMessages: ErrorMessages;
    setErrorMessages: React.Dispatch<React.SetStateAction<ErrorMessages>>;
    DisciplineData?: disciplineType[];
    SpecializationData?: specializationDataType[];
    setDisciplineId: React.Dispatch<React.SetStateAction<string>>;
    disciplineId: string;
}

const Studies = ({
    data,
    addQuery,
    errorMessages,
    setErrorMessages,
    DisciplineData,
    SpecializationData,
    setDisciplineId,
    disciplineId
}: StudiesProps) => {
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
                        addQuery({
                            studyLevel: value
                        });
                        clearError(
                            errorMessages,
                            setErrorMessages,
                            'studyLevel'
                        );
                    }}
                    selectedValue={data.studyLevel}
                    error={errorMessages.studyLevel}
                />
                <Chip
                    label="Popular searches"
                    data={DisciplineData?.map((item) => item.name)}
                    onSelect={(value: string) => {
                        const selectedDiscipline = DisciplineData?.find(
                            (item) => item.name === value
                        );

                        if (selectedDiscipline) {
                            setDisciplineId(selectedDiscipline.id);

                            addQuery({
                                discipline: selectedDiscipline.name
                            });

                            clearError(
                                errorMessages,
                                setErrorMessages,
                                'discipline'
                            );
                        }
                    }}
                    selectedValue={data.discipline}
                    error={errorMessages.discipline}
                />
                <div>
                    <Chip
                        label="Select Subjects"
                        useSelect
                        options={SpecializationData?.filter(
                            (item) =>
                                item.discipline === disciplineId &&
                                !(
                                    data.specialization &&
                                    data.specialization.includes(item.name)
                                )
                        ).map((item) => ({
                            label: item.name,
                            value: item.name
                        }))}
                        onChange={(option) => {
                            const selectedValue = (option as OptionType).value;

                            const specialization = Array.isArray(
                                data.specialization
                            )
                                ? data.specialization
                                : [];

                            const isSelected =
                                specialization.includes(selectedValue);

                            if (!isSelected && specialization.length < 3) {
                                addQuery({
                                    specialization: [
                                        ...specialization,
                                        selectedValue
                                    ]
                                });
                            } else if (isSelected) {
                                addQuery({
                                    specialization: specialization.filter(
                                        (item) => item !== selectedValue
                                    )
                                });
                            }
                            clearError(
                                errorMessages,
                                setErrorMessages,
                                'specialization'
                            );
                        }}
                        placeholder="Search here to select subjects"
                        isDisable={
                            !data.discipline ||
                            (data.specialization
                                ? data.specialization.length === 3
                                : undefined)
                        }
                        error={errorMessages.specialization}
                    />
                    <Chip
                        data={
                            Array.isArray(data.specialization)
                                ? data.specialization
                                : []
                        }
                        selectedValue={
                            Array.isArray(data.specialization)
                                ? data.specialization
                                : []
                        }
                        onRemove={(value) => {
                            addQuery({
                                specialization: Array.isArray(
                                    data.specialization
                                )
                                    ? data.specialization.filter(
                                          (item) => item != value
                                      )
                                    : []
                            });
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Studies;
