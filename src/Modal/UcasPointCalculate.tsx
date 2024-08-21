import Button from '@/components/Button';
import QualificationSection from '@/components/Ucas/QualificationSection';
import { useUi } from '@/hooks/user-interface';
import { Qualification } from '@/types';
import React, { SetStateAction, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

const UcasPointCalculate = () => {
    const { modalState, hideModal } = useUi() as {
        modalState: {
            qualifications: Qualification[];
            setQualifications: React.Dispatch<SetStateAction<Qualification[]>>;
            setTotalScore: React.Dispatch<SetStateAction<number>>;
        };
        hideModal: () => void;
    };

    const [localQualifications, setLocalQualifications] = useState<
        Qualification[]
    >([...modalState.qualifications]);
    const [localTotalScore, setLocalTotalScore] = useState<number>(
        modalState.qualifications.reduce(
            (total, qualification) =>
                total + parseInt(qualification.selectedScore || '0'),
            0
        )
    );

    const handleApplyChanges = () => {
        modalState.setQualifications(localQualifications);
        modalState.setTotalScore(localTotalScore);
        hideModal();
    };

    return (
        <div className="bg-white p-5 w-[450px] rounded-md relative">
            <button className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-0.5">
                <RxCross2 onClick={hideModal} />
            </button>
            <h3 className="font-bold text-2xl text-center">
                UCAS Points Calculator
            </h3>
            <div className="my-8">
                {localQualifications.map((qualification) => (
                    <QualificationSection
                        key={'qualification --' + qualification.id}
                        qualification={qualification}
                        qualifications={localQualifications}
                        setQualifications={setLocalQualifications}
                        setTotalScore={setLocalTotalScore}
                        modal
                    />
                ))}
            </div>
            <div className="border-t pt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Button
                        onClick={() =>
                            setLocalQualifications((prev) => [
                                ...prev,
                                { id: Date.now() }
                            ])
                        }
                        text="+ Add Qualification"
                        className="py-2 px-3 text-sm rounded-[100em] min-w-fit"
                    />
                    <Button
                        onClick={() => {
                            setLocalQualifications([{ id: Date.now() }]);
                            setLocalTotalScore(0);
                        }}
                        text="Clear All"
                        className="py-2 px-3 text-sm rounded-[100em]"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        onClick={handleApplyChanges}
                        text="Apply Changes"
                        className="py-2 px-3 text-sm rounded-[100em]"
                    />
                </div>
            </div>
        </div>
    );
};

export default UcasPointCalculate;
