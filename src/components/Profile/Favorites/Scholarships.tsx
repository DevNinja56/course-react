import { useGetUserFavoritesQuery } from '@/store/slices/allRequests';
import React, { useEffect } from 'react';
import FavCard from './FavCard';
import { ROUTES } from '@/config/constant';
import { useFilterQuery } from '@/hooks/filterQuery';
import LoaderSpinner from '@/components/LoaderSpinner';

const Scholarships = () => {
    const { data, isLoading, refetch } =
        useGetUserFavoritesQuery('scholarship');
    const { addQuery } = useFilterQuery();
    useEffect(() => {
        refetch();
    }, []);
    return (
        <div>
            <p className="py-[14px] text-[32px] font-semibold">Scholarships</p>
            <div className="pb-4 grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                    <LoaderSpinner color="#000" />
                ) : !data?.length ? (
                    <p>No Favorite Scholarships Found</p>
                ) : (
                    data?.map(({ scholarship }) => (
                        <FavCard
                            key={'scholarship-institute--' + scholarship?.id}
                            id={scholarship?.id}
                            title={scholarship?.name}
                            image={'/images/Scholarships/scholarship.jpg'}
                            type="scholarship"
                            link={ROUTES.FILTER_COURSE}
                            onClick={() =>
                                addQuery({ scholarship: [scholarship.name] })
                            }
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Scholarships;
