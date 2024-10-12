import Button from '@/components/Button';
import QualificationSection from '@/components/Ucas/QualificationSection';
import { ROUTES } from '@/config/constant';
import { Qualification } from '@/types';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const UcasPointCalculate = () => {
    const { push } = useRouter();

    const [localQualifications, setLocalQualifications] = useState<
        Qualification[]
    >([{ id: Date.now() }]);

    const handleApplyChanges = () => {
        push({
            pathname: ROUTES.UCAS,
            query: { qualifications: JSON.stringify(localQualifications) }
        });
    };

    return (
        <div className="bg-white p-3 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl md:text-2xl text-center">
                UCAS Points Calculator
            </h3>
            <div className="my-8">
                {localQualifications.map((qualification) => (
                    <QualificationSection
                        key={'qualification --' + qualification.id}
                        qualification={qualification}
                        qualifications={localQualifications}
                        setQualifications={setLocalQualifications}
                        setTotalScore={() => {}}
                        modal
                    />
                ))}
            </div>
            <div className="border-t pt-5 flex flex-wrap gap-2 items-center justify-between">
                <div className="flex items-center gap-3">
                    <Button
                        onClick={() =>
                            setLocalQualifications((prev) => [
                                ...prev,
                                { id: Date.now() }
                            ])
                        }
                        text="+ Add Qualification"
                        className="py-2 px-2 md:px-3 text-xs md:text-sm rounded-[100em] min-w-fit"
                    />
                    <Button
                        onClick={() => {
                            setLocalQualifications([{ id: Date.now() }]);
                            // setLocalTotalScore(0);
                        }}
                        text="Clear All"
                        className="py-2 px-2 md:px-3 text-xs md:text-sm rounded-[100em]"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        onClick={handleApplyChanges}
                        text="Calculate Total"
                        className="py-2 px-2 md:px-3 text-xs md:text-sm rounded-[100em]"
                    />
                </div>
            </div>
        </div>
    );
};

export default UcasPointCalculate;
