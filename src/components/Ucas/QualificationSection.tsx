import React, { SetStateAction } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Select, { SingleValue } from 'react-select';
import { UCAS_DATA } from '@/utils/data/ucas';
import { Qualification, QualificationData } from '@/types';

interface propTypes {
    qualification?: Qualification;
    qualifications: Qualification[];
    setQualifications: React.Dispatch<SetStateAction<Qualification[]>>;
    setTotalScore: React.Dispatch<SetStateAction<number>>;
    modal?: boolean;
}

const QualificationSection = ({
    qualification,
    qualifications,
    setQualifications,
    setTotalScore,
    modal
}: propTypes) => {
    const groups = new Set(UCAS_DATA.map((item) => item.group));

    const calculateTotalScore = (qualifications: Qualification[]) => {
        return qualifications.reduce((total, qualification) => {
            return total + parseInt(qualification.selectedScore || '0');
        }, 0);
    };

    const handleQualificationChange = (
        id: number,
        selectedItem: SingleValue<{ value: QualificationData; label: string }>
    ) => {
        const updatedQualifications = qualifications.map((qualification) =>
            qualification.id === id
                ? {
                      ...qualification,
                      selectedQualification: selectedItem?.value,
                      selectedScore: undefined
                  }
                : qualification
        );
        setQualifications(updatedQualifications);
        setTotalScore(calculateTotalScore(updatedQualifications));
    };

    const handleScoreChange = (
        id: number,
        selectedItem: SingleValue<{ value: string; label: string | undefined }>
    ) => {
        const updatedQualifications = qualifications.map((qualification) =>
            qualification.id === id
                ? {
                      ...qualification,
                      selectedScore: selectedItem?.value,
                      selectedGrade: selectedItem?.label || ''
                  }
                : qualification
        );
        setQualifications(updatedQualifications);
        setTotalScore(calculateTotalScore(updatedQualifications));
    };

    return (
        qualification && (
            <div
                className={`flex gap-5 items-center ${modal && 'mb-5'}`}
                key={qualification.id}
            >
                <div
                    className={`${modal && 'flex flex-col gap-5 items-start'} w-full flex gap-2`}
                >
                    <div className="w-full">
                        <Select
                            options={Array.from(groups).map((group) => ({
                                label: group,
                                options: UCAS_DATA.filter(
                                    (item) => item.group === group
                                ).map((item) => ({
                                    value: item,
                                    label: item.name
                                }))
                            }))}
                            onChange={(selectedItem) =>
                                handleQualificationChange(
                                    qualification.id,
                                    selectedItem
                                )
                            }
                            placeholder="Select Qualification"
                            value={
                                qualification.selectedQualification
                                    ? {
                                          value: qualification.selectedQualification,
                                          label: qualification
                                              .selectedQualification.name
                                      }
                                    : null
                            }
                        />
                    </div>
                    <div className="w-full">
                        <Select
                            options={qualification.selectedQualification?.grades.map(
                                (item) => ({
                                    value: item.score,
                                    label: item.grade
                                })
                            )}
                            onChange={(selectedItem) =>
                                handleScoreChange(
                                    qualification.id,
                                    selectedItem
                                )
                            }
                            placeholder="Select Grade"
                            value={
                                qualification.selectedScore
                                    ? {
                                          value: qualification.selectedScore,
                                          label: qualification.selectedGrade
                                      }
                                    : null
                            }
                        />
                    </div>
                </div>
                <p className="text-xl">{qualification.selectedScore || '0'}</p>
                <button
                    disabled={qualifications.length === 1}
                    onClick={() => {
                        const updatedQualifications = qualifications.filter(
                            (selected_qualification) =>
                                selected_qualification.id !== qualification.id
                        );
                        setQualifications(updatedQualifications);
                        setTotalScore(
                            calculateTotalScore(updatedQualifications)
                        );
                    }}
                >
                    <RxCross2 className="p-1 bg-gray-400 text-white rounded-full text-lg cursor-pointer hover:opacity-50 transition-all duration-300 min-w-fit" />
                </button>
            </div>
        )
    );
};

export default QualificationSection;
