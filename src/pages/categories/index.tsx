import React from 'react';
// import Image from 'next/image';
import Card from '@/components/Fields/Card';
import LoaderSpinner from '@/components/LoaderSpinner';
import { useGetCountDisciplineQuery } from '@/store/slices/allRequests';

const Fields = () => {
    const { data, isLoading } = useGetCountDisciplineQuery();
    return (
        <>
            <div className="w-full flex items-center justify-between h-[214px] mt-[90px] bg-profileBgColor mb-16">
                <img
                    height={193}
                    width={193}
                    alt="fields-round"
                    className="mt-[-190px] md:mt-[-150px] ml-[-20px] lg:ml-[-4px] h-[89px] w-[91px] md:w-[129px] md:h-[126px] lg:h-[193px] lg:w-[193px]"
                    src="/images/profileImages/Ellipse 418.svg"
                    // priority
                />
                <div className="flex flex-col items-center">
                    <h1 className="text-mainTextColor text-[36px] md:text-[48px] font-bold">
                        Fields
                    </h1>
                    <p className="text-blueColor font-bold text-lg md:text-[23px] text-center">
                        Top Programs all over the World
                    </p>
                </div>
                <img
                    height={235}
                    width={100}
                    alt="fields-round-2"
                    className="mt-[207px] hidden lg:block"
                    src="/images/Fields/Frame 691.svg"
                    // priority
                />
                <img
                    height={154}
                    width={109}
                    alt="fields-round-2"
                    className="mt-[207px] hidden md:block lg:hidden"
                    src="/images/Fields/Frame 866.svg"
                    // priority
                />
                <img
                    height={124}
                    width={56}
                    alt="fields-round-2"
                    className="mt-[207px] block md:hidden lg:hidden"
                    src="/images/Fields/Frame 910.svg"
                    // priority
                />
            </div>
            <div className="w-full pb-4 md:pb-20">
                <div className="container mx-auto px-[80px] lg:px-2 2xl:px-8 transition-all duration-300 flex justify-between">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] w-full place-items-center">
                        {isLoading ? (
                            <LoaderSpinner />
                        ) : (
                            data?.map((discipline, i) => (
                                <Card
                                    key={'discipline--query-count' + i}
                                    discipline={discipline}
                                />
                            ))
                        )}
                    </div>
                </div>
                {/* {data?.totalPage && data?.totalPage > 1 && (
                    <div className="pt-5">
                        <PaginationBox
                            totalPage={data?.totalPage}
                            page={page}
                            refetch={setPage}
                        />
                    </div>
                )} */}
            </div>
        </>
    );
};

export default Fields;
