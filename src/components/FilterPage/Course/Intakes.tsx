import React from 'react';
import { FilterCheckBox } from '../FilterCheckBOx';

const IntakesFilter = () => {
    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4 relative ">
                <h5 className="text-lg text-darkGrayColor font-medium">
                    Intakes
                </h5>
            </div>
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {[
                    { name: 'jan,feb,mar', id: '1', value: 1 },
                    { name: 'apr,may,jun', id: '2', value: 2 },
                    { name: 'jul,aug,sep', id: '3', value: 3 },
                    { name: 'oct,nov,dec', id: '4', value: 4 }
                ].map(({ name, id }) => (
                    <FilterCheckBox
                        key={'intakes--list--' + id}
                        id={name}
                        text={name}
                        name={'intakes'}
                        value={name.split(',')}
                    />
                ))}
            </div>
        </div>
    );
};

export default IntakesFilter;
