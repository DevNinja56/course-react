import { useGetUserFavoritesQuery } from '@/store/slices/allRequests';
import React, { useEffect } from 'react';
import FavCard from './FavCard';
import { ROUTES } from '@/config/constant';
import LoaderSpinner from '@/components/LoaderSpinner';

const Courses = () => {
    const { data, isLoading, refetch } = useGetUserFavoritesQuery('course');
    useEffect(() => {
        refetch();
    }, []);
    return (
        <div>
            <p className="py-[14px] text-[32px] font-semibold">Courses</p>
            <div className="pb-4 grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                    <LoaderSpinner color="#000" />
                ) : !data?.length ? (
                    <p>No Favorite Course Found</p>
                ) : (
                    data?.map(({ course }) => (
                        <FavCard
                            key={'course-institute--' + course.id}
                            id={course.id}
                            title={course.name}
                            image={course.logo}
                            type="course"
                            link={ROUTES.COURSE.replace(':id', course.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Courses;
