import Card from '@/components/Blog/Card';
import PaginationBox from '@/components/Pagination';
import { usePaginatedBlogs } from '@/hooks/blogsPaginated';
// import Image from 'next/image';
import React, { useEffect } from 'react';

const Blog = () => {
    const {
        data,
        fetchBlogs,
        paginatorInfo: { totalPage, page }
    } = usePaginatedBlogs();

    useEffect(() => {
        fetchBlogs();
    }, []);
    return (
        <>
            <div className="w-full flex items-center justify-center mt-[100px] bg-profileBgColor py-20 relative mb-24">
                <img
                    height={193}
                    width={191}
                    alt="blog-round"
                    className="absolute top-[-20px] left-[-20px] lg:top-0 lg:left-0 h-[84px] w-[86px] lg:h-[193px] lg:w-[191px]"
                    src="/images/Blogs/Frame 642.svg"
                    // priority
                />
                <div className="flex flex-col gap-y-5 items-center z-10">
                    <div className="flex flex-col justify-center items-center gap-y-3">
                        <p className="text-lg md:text-xl font-bold text-blueColor">
                            Tech Blog
                        </p>
                        <div className="mb-3 flex items-center flex-col">
                            <h1 className="text-mainTextColor text-2xl lg:text-[32px] font-extrabold">
                                Our Work Resources
                            </h1>
                            <p className="text-grayColor text-center">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc vides, quid faciat.
                                <br /> Mihi vero, inquit, placet agi subtilius
                                et, ut ipse.
                            </p>
                        </div>
                    </div>
                </div>
                <img
                    height={193}
                    width={191}
                    alt="blog-round-2"
                    className="absolute bottom-0 right-0 h-[84px] w-[86px] lg:h-[193px] lg:w-[191px]"
                    src="/images/Blogs/Frame 643.svg"
                />
            </div>
            <div className="w-full pb-12">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-5 md:px-[90px] lg:px-2 2xl:px-8 transition-all duration-300 flex flex-col items-center gap-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-[31px] w-full">
                        {data?.map((blog, i) => (
                            <Card
                                key={'blogs-card--' + i}
                                tags={blog.tags}
                                title={blog.title}
                                favorite={blog.favoriteId}
                                id={blog.id}
                                image={blog.image}
                            />
                        ))}
                    </div>
                    <PaginationBox
                        totalPage={totalPage}
                        page={page}
                        refetch={fetchBlogs}
                    />
                </div>
            </div>
        </>
    );
};

export default Blog;
