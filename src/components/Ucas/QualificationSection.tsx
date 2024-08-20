import React, { useState } from 'react';
import Button from '../Button';
import { RxCross2 } from 'react-icons/rx';
import Select, { SingleValue } from 'react-select';

interface Grade {
    grade: string;
    score: string;
}

interface QualificationData {
    name: string;
    group: string;
    grades: Grade[];
}

interface SelectedQualification {
    id: number;
}

interface SelectedScores {
    [key: number]: string | undefined;
}

const data: QualificationData[] = [
    {
        name: 'A-Level',
        group: 'A-Level',
        grades: [
            { grade: 'A*', score: '56' },
            { grade: 'A', score: '48' },
            { grade: 'B', score: '40' },
            { grade: 'C', score: '32' },
            { grade: 'D', score: '24' },
            { grade: 'E', score: '16' }
        ]
    },
    {
        name: 'AS-Level',
        group: 'A-Level',
        grades: [
            { grade: 'A', score: '20' },
            { grade: 'B', score: '16' },
            { grade: 'C', score: '12' },
            { grade: 'D', score: '8' },
            { grade: 'E', score: '4' }
        ]
    },
    {
        name: 'A-Level Double Award',
        group: 'A-Level Double Award',
        grades: [
            { grade: 'A*A*', score: '112' },
            { grade: 'A*A', score: '104' },
            { grade: 'AA', score: '96' },
            { grade: 'AB', score: '88' },
            { grade: 'BB', score: '80' },
            { grade: 'BC', score: '72' },
            { grade: 'CC', score: '64' },
            { grade: 'CD', score: '56' },
            { grade: 'DD', score: '48' },
            { grade: 'DE', score: '40' },
            { grade: 'EE', score: '32' }
        ]
    },
    {
        name: 'AS-Level Double Award',
        group: 'A-Level Double Award',
        grades: [
            { grade: 'AA', score: '40' },
            { grade: 'AB', score: '36' },
            { grade: 'BB', score: '32' },
            { grade: 'BC', score: '28' },
            { grade: 'CC', score: '24' },
            { grade: 'CD', score: '22' },
            { grade: 'DD', score: '20' },
            { grade: 'DE', score: '16' },
            { grade: 'EE', score: '12' }
        ]
    }
];

const QualificationSection: React.FC = () => {
    const [qualifications, setQualifications] = useState<
        SelectedQualification[]
    >([{ id: 1 }]);
    const [selectedQualification, setSelectedQualification] = useState<
        Grade[] | undefined
    >();
    const [selectedScores, setSelectedScores] = useState<SelectedScores>({});
    const [totalScore, setTotalScore] = useState<number>(0);

    const groups = new Set(data.map((item) => item.group));

    const calculateTotalScore = (scores: SelectedScores) => {
        return Object.values(scores).reduce(
            (total, score) => total + parseInt(score || '0'),
            0
        );
    };

    const handleRemoveQualification = (id: number) => {
        setQualifications(
            qualifications.filter((qualification) => qualification.id !== id)
        );
        setSelectedScores((prev) => {
            const newScores = { ...prev };
            delete newScores[id];
            return newScores;
        });
        setTotalScore((prev) => {
            const scoreToRemove = selectedScores[id];
            return prev - (scoreToRemove ? parseInt(scoreToRemove) : 0);
        });
    };

    const handleClearAll = () => {
        setQualifications([{ id: 1 }]);
        setSelectedQualification(undefined);
        setSelectedScores({});
        setTotalScore(0);
    };

    const handleScoreChange = (
        qualificationId: number,
        score: string | undefined
    ) => {
        setSelectedScores((prev) => {
            const newScores = { ...prev, [qualificationId]: score };
            setTotalScore(calculateTotalScore(newScores));
            return newScores;
        });
    };

    return (
        <div className="flex flex-col gap-8">
            <h1 className="font-bold text-3xl">Qualifications</h1>
            {qualifications?.map((qualification) => (
                <div className="flex gap-5 items-center" key={qualification.id}>
                    <div className="w-full">
                        <Select
                            options={Array.from(groups).map((group) => ({
                                label: group,
                                options: data
                                    .filter((item) => item.group === group)
                                    .map((item) => ({
                                        value: item.grades,
                                        label: item.name
                                    }))
                            }))}
                            onChange={(
                                selectedItem: SingleValue<{
                                    value: Grade[];
                                    label: string;
                                }>
                            ) => setSelectedQualification(selectedItem?.value)}
                        />
                    </div>
                    <div className="w-full">
                        <Select
                            options={selectedQualification?.map((item) => ({
                                value: item.score,
                                label: item.grade
                            }))}
                            onChange={(
                                selectedItem: SingleValue<{
                                    value: string;
                                    label: string;
                                }>
                            ) => {
                                handleScoreChange(
                                    qualification.id,
                                    selectedItem?.value
                                );
                            }}
                        />
                    </div>
                    <p className="text-xl">
                        {Object.keys(selectedScores).length > 0
                            ? selectedScores[qualification.id]
                            : '0'}
                    </p>
                    <button disabled={qualifications?.length === 1}>
                        <RxCross2
                            onClick={() =>
                                handleRemoveQualification(qualification.id)
                            }
                            className="p-1 bg-gray-400 text-white rounded-full text-lg cursor-pointer hover:opacity-50 transition-all duration-300 min-w-fit"
                        />
                    </button>
                </div>
            ))}
            <div className="border-t pt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Button
                        onClick={() =>
                            setQualifications([
                                ...qualifications,
                                { id: qualifications.length + 1 }
                            ])
                        }
                        text="Add another qualification"
                        className="py-2 px-3 text-sm rounded-[100em] min-w-fit"
                    />
                    <Button
                        onClick={handleClearAll}
                        text="Clear all"
                        className="py-2 px-3 text-sm rounded-[100em]"
                    />
                </div>
                <div className="flex flex-col items-center font-bold">
                    Total Points
                    <span className="text-2xl">{totalScore}</span>
                </div>
            </div>
        </div>
    );
};

export default QualificationSection;
