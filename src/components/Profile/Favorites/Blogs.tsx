import { useGetUserFavoritesQuery } from '@/store/slices/allRequests';
import React, { useEffect } from 'react';
import FavCard from './FavCard';
import { ROUTES } from '@/config/constant';
import LoaderSpinner from '@/components/LoaderSpinner';

const Blogs = () => {
    const { data, isLoading, refetch } = useGetUserFavoritesQuery('blog');
    useEffect(() => {
        refetch();
    }, []);
    return (
        <div>
            <p className="py-[14px] text-[32px] font-semibold">Blogs</p>
            <div className="pb-4 grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                    <LoaderSpinner color="#000" />
                ) : !data?.length ? (
                    <p>No Favorite Blogs Found</p>
                ) : (
                    data?.map(({ blog }) => (
                        <FavCard
                            key={'blog-institute--' + blog.id}
                            id={blog.id}
                            title={blog.title}
                            image={blog.image}
                            type="blog"
                            refetch={refetch}
                            link={ROUTES.BLOGS_DETAIL.replace(':id', blog.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Blogs;
