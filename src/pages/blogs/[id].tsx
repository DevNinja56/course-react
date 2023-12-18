import React from 'react';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { blogsType } from '@/types';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { format } from 'timeago.js';

const BlogsDetail = ({ data }: { data: blogsType }) => {
    return (
        <>
            <div className="w-full flex items-center mt-[100px] bg-white relative mb-0 lg:mb-10 overflow-hidden">
                <Image
                    height={193}
                    width={193}
                    alt="blogDetail-round"
                    className="top-[-40px] lg:top-[-100px] left-[-35px] lg:left-[-30px] absolute h-[104px] w-[106px] lg:h-[193px] lg:w-[193px]"
                    src="/images/profileImages/Ellipse 418.svg"
                    priority
                />
                <div className="w-full py-20 z-10">
                    <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-5 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 flex flex-col lg:flex-row justify-between lg:items-center gap-y-8">
                        <div className="flex flex-col gap-y-4 transition-all duration-300 z-10">
                            <h1
                                style={{ lineHeight: '48px' }}
                                className="text-[32px] md:text-[40px] font-black text-mainTextColor leading-10 w-auto md:w-[459px] lg:w-auto"
                            >
                                {data?.title}
                            </h1>
                            <p className="text-darkGrayColor mb-2">
                                {format(data.createdAt)}
                            </p>
                            <div className="flex gap-3 ">
                                {data?.tags.map((item) => (
                                    <button
                                        key={'single-blogs-tags--' + item}
                                        className="py-[6px] px-3 rounded-[5px] border border-blueColor text-blueColor text-[14px] w-[95px] z-10 bg-white "
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <Image
                            height={307}
                            width={450}
                            alt="post"
                            className="max-w-2/5 aspect-[5/4] object-contain "
                            src={
                                data?.image ??
                                '/images/BlogsDetail/post-1 1.svg'
                            }
                            priority
                        />
                    </div>
                </div>
                <Image
                    height={235}
                    width={100}
                    alt="blogDetail-round2"
                    className="absolute top-56 md:top-12 lg:top-20 right-[-18px] h-[154px] w-[101px] md:h-[154px] md:w-[86px]"
                    src={'/images/BlogsDetail/Frame 691.svg'}
                    priority
                />
            </div>
            <div className="w-full pb-28">
                <div className="max-w-[834px] 2xl:max-w-[1966px] mx-auto px-5 md:px-[50px] lg:px-2">
                    <div className="flex flex-col gap-y-[35px]">
                        <div
                            className="content"
                            dangerouslySetInnerHTML={{
                                __html: data?.description ?? ''
                            }}
                        />
                        <div className="w-full flex justify-center items-center">
                            <div className="flex items-center gap-x-[25px]">
                                <div className="flex items-center justify-center h-[38px] w-[38px] rounded-full border border-darkGrayColor hover:border-blueColor transition-all duration-300 group cursor-pointer">
                                    <svg
                                        width="10"
                                        height="20"
                                        viewBox="0 0 10 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10 6.875H6.25V4.375C6.25 4.04348 6.3817 3.72554 6.61612 3.49112C6.85054 3.2567 7.16848 3.125 7.5 3.125H8.75V0H6.25C5.25544 0 4.30161 0.395088 3.59835 1.09835C2.89509 1.80161 2.5 2.75544 2.5 3.75V6.875H0V10H2.5V20H6.25V10H8.75L10 6.875Z"
                                            className="fill-[#626262] group-hover:fill-blueColor transition-all duration-300"
                                        />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center h-[38px] w-[38px] rounded-full border border-darkGrayColor hover:border-blueColor transition-all duration-300 group cursor-pointer">
                                    <svg
                                        width="20"
                                        height="17"
                                        viewBox="0 0 20 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20 1.9506C19.2483 2.2767 18.4534 2.49226 17.64 2.5906C18.4982 2.07792 19.1413 1.27138 19.45 0.3206C18.6436 0.800663 17.7608 1.1389 16.84 1.3206C16.2245 0.653172 15.405 0.208897 14.5098 0.0574517C13.6147 -0.0939932 12.6945 0.0559587 11.8938 0.48379C11.093 0.911621 10.4569 1.59313 10.0852 2.42144C9.71355 3.24974 9.62729 4.17799 9.84 5.0606C8.20943 4.97813 6.61444 4.55355 5.15865 3.81446C3.70287 3.07537 2.41885 2.03829 1.39 0.7706C1.02914 1.40077 0.839519 2.11442 0.84 2.8406C0.83872 3.51498 1.00422 4.17922 1.32176 4.77416C1.63929 5.36911 2.09902 5.87631 2.66 6.2506C2.00798 6.23286 1.36989 6.0579 0.8 5.7406V5.7906C0.804887 6.73549 1.13599 7.64969 1.73731 8.37857C2.33864 9.10744 3.17326 9.60624 4.1 9.7906C3.74326 9.89917 3.37287 9.95641 3 9.9606C2.74189 9.95759 2.48442 9.93418 2.23 9.8906C2.49391 10.7034 3.00462 11.4137 3.69107 11.9228C4.37753 12.4318 5.20558 12.7142 6.06 12.7306C4.6172 13.8659 2.83588 14.4855 1 14.4906C0.665735 14.4917 0.331736 14.4717 0 14.4306C1.87443 15.6409 4.05881 16.2833 6.29 16.2806C7.82969 16.2966 9.35714 16.0056 10.7831 15.4247C12.2091 14.8437 13.505 13.9845 14.5952 12.8971C15.6854 11.8097 16.548 10.516 17.1326 9.09151C17.7172 7.66702 18.012 6.14033 18 4.6006C18 4.4306 18 4.2506 18 4.0706C18.7847 3.48541 19.4615 2.76803 20 1.9506Z"
                                            className="fill-[#626262] group-hover:fill-blueColor transition-all duration-300"
                                        />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center h-[38px] w-[38px] rounded-full border border-darkGrayColor hover:border-blueColor transition-all duration-300 group cursor-pointer">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 6.25H4.4725V20H0V6.25ZM16.655 6.41125C16.6075 6.39625 16.5625 6.38 16.5125 6.36625C16.4525 6.35266 16.392 6.34099 16.3312 6.33125C16.0672 6.27726 15.7983 6.25003 15.5288 6.25C12.9213 6.25 11.2675 8.14625 10.7225 8.87875V6.25H6.25V20H10.7225V12.5C10.7225 12.5 14.1025 7.7925 15.5288 11.25V20H20V10.7212C19.9981 9.73392 19.6687 8.77512 19.0634 7.99513C18.458 7.21515 17.611 6.65808 16.655 6.41125Z"
                                            className="fill-[#626262] group-hover:fill-blueColor transition-all duration-300"
                                        />
                                        <path
                                            d="M2.1875 4.375C3.39562 4.375 4.375 3.39562 4.375 2.1875C4.375 0.979377 3.39562 0 2.1875 0C0.979377 0 0 0.979377 0 2.1875C0 3.39562 0.979377 4.375 2.1875 4.375Z"
                                            className="fill-[#626262] group-hover:fill-blueColor transition-all duration-300"
                                        />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center h-[38px] w-[38px] rounded-full border border-darkGrayColor hover:border-blueColor transition-all duration-300 group cursor-pointer">
                                    <svg
                                        width="20"
                                        height="15"
                                        viewBox="0 0 20 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.0002 6.29286L19.1287 0.428571C18.7617 0.153296 18.3161 0.00307218 17.8573 0H2.14301C1.68425 0.00307218 1.23859 0.153296 0.871582 0.428571L10.0002 6.29286Z"
                                            className="fill-[#626262] group-hover:fill-blueColor transition-all duration-300"
                                        />
                                        <path
                                            d="M10.3857 7.74381L10.2643 7.80095H10.2071C10.1414 7.83033 10.0715 7.8496 10 7.85809C9.94071 7.86556 9.88072 7.86556 9.82143 7.85809H9.76429L9.64286 7.80095L0.0714285 1.61523C0.0256986 1.78776 0.00170336 1.96533 0 2.14381V12.1438C0 12.7121 0.225765 13.2572 0.627628 13.659C1.02949 14.0609 1.57454 14.2867 2.14286 14.2867H17.8571C18.4255 14.2867 18.9705 14.0609 19.3724 13.659C19.7742 13.2572 20 12.7121 20 12.1438V2.14381C19.9983 1.96533 19.9743 1.78776 19.9286 1.61523L10.3857 7.74381Z"
                                            className="fill-[#626262] group-hover:fill-blueColor transition-all duration-300"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-full pb-52">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-5 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300">
                    <div className="transition-all duration-300 flex flex-col gap-y-[35px]">
                        <h1 className="font-black text-[32px] text-mainTextColor">
                            Related Posts
                        </h1>
                        <div className="flex items-center gap-[31px] overflow-x-auto w-full removeScrollBar">
                            <Card
                                tags={['Partners', 'Team', 'Business']}
                                title="How networking will help boost your company growth"
                                favorite={[]}
                                image="/images/BlogsDetail/Rectangle 3662.svg"
                                id="1"
                            />
                            <Card
                                tags={['Partners', 'Team', 'Business']}
                                title="How networking will help boost your company growth"
                                favorite={[]}
                                image="/images/BlogsDetail/Rectangle 3662.svg"
                                id="2"
                            />
                            <Card
                                tags={['Partners', 'Team', 'Business']}
                                title="How networking will help boost your company growth"
                                favorite={[]}
                                image="/images/BlogsDetail/Rectangle 3662.svg"
                                id="3"
                            />
                        </div>
                        <div className="flex items-center w-full justify-center gap-x-[10px] mt-4 lg:hidden">
                            <div className="px-4 rotate-[-0deg] rounded-[10px] border-4 border-grayBorderColor"></div>
                            <div className="px-6 rotate-0 rounded-[10px] border-4 border-blueColor"></div>
                            <div className="px-4 rotate-[-0deg] rounded-[10px] border-4 border-grayBorderColor"></div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export const getServerSideProps: GetServerSideProps<{
    data: { data: blogsType; status: number };
}> = async (context) => {
    const id = context.query?.id as string;
    const token = context.req.cookies['access_token'];
    let data = null;
    try {
        const res = await fetch(
            `${
                process.env.NEXT_PUBLIC_REST_API_ENDPOINT
            }${API_ENDPOINTS.SINGLE_BLOG.replace(':id', id)}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );
        data = await res.json();
    } catch (error) {
        data = null;
        console.log(error);
    }
    return { props: { data: data?.data ?? data! ?? null } };
};

export default BlogsDetail;
