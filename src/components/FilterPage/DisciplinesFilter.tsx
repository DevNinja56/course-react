import Image from 'next/image';
import React from 'react';
import FilterCheckBOx from './FilterCheckBOx';
import { useGetDisciplineQuery } from '@/store/slices/allRequests';

const DisciplinesFilter = () => {
    const { data: disciplineList } = useGetDisciplineQuery();

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4">
                <h1 className="text-lg text-darkGrayColor font-medium">
                    Disciplines
                </h1>
                <Image
                    height={24}
                    width={24}
                    alt="search"
                    src="/images/Scholarships/Group 7678.svg"
                    priority
                />
            </div>
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {disciplineList?.map((discipline, i) => (
                    <FilterCheckBOx
                        key={'country--list--' + i}
                        id={discipline.id}
                        text={discipline.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default DisciplinesFilter;
