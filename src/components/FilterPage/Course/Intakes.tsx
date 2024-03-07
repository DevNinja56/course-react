import React from 'react';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterCheckBOx';

interface propsType {
    data: {
        intakes: string[];
    }[];
    isLoading: boolean;
}

const IntakesFilter: React.FC<propsType> = ({ isLoading }) => {
    const intakesFilterMonths = [
        { intakes: ['Jan', 'Feb', 'Mar'] },
        { intakes: ['Apr', 'May', 'Jun'] },
        { intakes: ['Jul', 'Aug', 'Sep'] },
        { intakes: ['Oct', 'Nov', 'Dec'] }
    ];

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4 relative ">
                <h5 className="text-lg text-darkGrayColor font-medium">
                    Intakes
                </h5>
            </div>
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
                                text={name.join(',')}
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
