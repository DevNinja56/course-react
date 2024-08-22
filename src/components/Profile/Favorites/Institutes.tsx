import { useGetUserFavoritesQuery } from '@/store/slices/allRequests';
import React, { useEffect } from 'react';
import FavCard from './FavCard';
import { useFilterQuery } from '@/hooks/filterQuery';
import { ROUTES } from '@/config/constant';
import LoaderSpinner from '@/components/LoaderSpinner';

const Institutes = () => {
    const { data, isLoading, refetch } = useGetUserFavoritesQuery('institute');
    const { addQuery } = useFilterQuery();
    useEffect(() => {
        refetch();
    }, []);
    return (
        <div>
            <p className="py-[14px] text-[32px] font-semibold hidden lg:block">
                Institutes
            </p>
            <div className="pb-4 grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12 lg:px-0">
                {isLoading ? (
                    <LoaderSpinner color="#000" />
                ) : !data?.length ? (
                    <p>No Favorite Institute Found</p>
                ) : (
                    data?.map(({ institute }) => (
                        <FavCard
                            key={'favorite-institute--' + institute.id}
                            id={institute.id}
                            title={institute.name}
                            image={institute.logo}
                            link={ROUTES.FILTER_COURSE}
                            type="institute"
                            onClick={() =>
                                addQuery({ institute: [institute.name] })
                            }
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Institutes;
