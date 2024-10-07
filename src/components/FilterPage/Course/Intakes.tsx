import React from 'react';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterCheckBox';

interface PropsType {
    data: {
        intakes: string[];
    }[];
    isLoading: boolean;
}

const IntakesFilter: React.FC<PropsType> = ({ isLoading }) => {
    const intakesFilterMonths = [
        { intakes: ['Jan', 'Feb', 'Mar'] },
        { intakes: ['Apr', 'May', 'Jun'] },
        { intakes: ['Jul', 'Aug', 'Sep'] },
        { intakes: ['Oct', 'Nov', 'Dec'] }
    ];

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {isLoading ? (
                    <FilterCheckBoxLoader />
                ) : (
                    intakesFilterMonths
                        .filter(({ intakes }) => intakes.length > 0)
                        .map(({ intakes: name }, i) => (
                            <FilterCheckBox
                                key={'intakes--list--' + i + name.join(', ')}
                                id={name.join(',')}
                                text={name.join(', ')}
                                name={'intakes'}
                                value={name}
                            />
                        ))
                )}
            </div>
        </div>
    );
};

export default IntakesFilter;
