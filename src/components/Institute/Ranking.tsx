import React from 'react';
import RankingCards from './RankingCards';
import { instituteType } from '@/types';

const Ranking = ({ data }: { data: instituteType }) => {
    return (
        <div className="flex flex-col gap-5 px-3 py-4 rounded-lg">
            <h1 className="text-xl font-bold text-mainTextColor">
                University Facts
            </h1>
            <div className="flex flex-col border border-gray-300 rounded-lg">
                <RankingCards
                    img="/images/institute/qs-world-university-rankings 1.svg"
                    text={data.qsWorldRanking + 'th'}
                />
                <RankingCards
                    img="/images/institute/Shanghai_Academic_Ranking_of_World_Universities_–_Logo 1.svg"
                    text={data.shanghaiRanking + 'th'}
                />
                <RankingCards
                    img="/images/institute/Shanghai_Academic_Ranking_of_World_Universities_–_Logo 2.svg"
                    text={data.timesHigherRanking + 'th'}
                    className="h-6 w-12"
                />
            </div>
        </div>
    );
};

export default Ranking;