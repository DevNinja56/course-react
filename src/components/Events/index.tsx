import React from 'react';
import EventCard from '@/components/Events/EventCard';
import { useGetPaginatedEventsQuery } from '@/store/slices/allRequests';
import LoaderSpinner from '../LoaderSpinner';

const Events = () => {
    const { data, isLoading } = useGetPaginatedEventsQuery({
        limit: 5,
        page: 1
    });
    return (
        <>
            {!!data?.count && (
                <div className="w-full pb-32 relative bg-white py-8">
                    <img
                        height={100}
                        width={100}
                        alt="card-round"
                        src="/images/Home/ourEventsRoundImgone.svg"
                        className="absolute left-0 bottom-40 lg:bottom-52 hidden md:block"
                        // priority
                    />
                    <img
                        height={74}
                        width={74}
                        alt="card-round"
                        src="/images/Home/ourEventsRoundImg2.svg"
                        className="absolute right-4 lg:right-0 xl:right-28 top-[285px] lg:top-[230px] hidden md:block"
                        // priority
                    />
                    <div className="container mx-auto px-4 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 flex flex-col items-center">
                        <p className="font-bold text-xl md:text-[23px] text-blueColor mb-3">
                            Our Events
                        </p>
                        <h1 className="font-extrabold text-[32px] md:text-[48px] text-mainTextColor mb-10 text-center md:text-start">
                            Join our upcoming event
                        </h1>
                        <div className="flex flex-col gap-6 w-full z-10">
                            {isLoading ? (
                                <LoaderSpinner />
                            ) : (
                                data?.data?.map((event) => (
                                    <EventCard key={event.id} event={event} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Events;
