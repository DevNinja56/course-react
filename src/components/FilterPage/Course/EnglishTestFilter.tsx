import React from 'react';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterBoxCheck';

interface PropsType {
    isLoading: boolean;
}

const EnglishTestFilter: React.FC<PropsType> = ({ isLoading }) => {
    const titleNames: { [key: string]: string } = {
        ielts: 'IELTS',
        pte: 'PTE',
        oxford: 'Oxford ELLT',
        language: 'Language Cert',
        duolingo: 'Duolingo',
        moi: 'MOI'
    };

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {isLoading ? (
                    <FilterCheckBoxLoader />
                ) : (
                    Object.entries(titleNames).map(([key,value], i) => (
                        <FilterCheckBox
                            key={`englishtest--list--${i}--${key}`}
                            id={key}
                            text={value} 
                            name="englishtest" 
                            value={key}
                            checkValue = {key}
                            
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default EnglishTestFilter;
