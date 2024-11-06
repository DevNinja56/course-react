// import Image from 'next/image';
import React from 'react';

const Card = () => {
    return (
        <div className="flex flex-col items-center gap-y-7 px-0 md:px-20 lg:px-0">
            <div className="bg-white rounded-[10px] py-5 px-5 pr-6 flex flex-col gap-y-4 custom-shadow z-10">
                <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-5 min-w-[250px] md:min-w-[320px] ">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <img
                            height={100}
                            width={100}
                            alt="testimonial-user"
                            className="h-20 w-20 md:h-[100px] md:w-[100px]"
                            src="/images/Blogs/testimoanlals.svg"
                            // priority
                        />
                        <img
                            height={38}
                            width={50}
                            alt="comment"
                            src="/images/Blogs/“.svg"
                            className="visible md:invisible w-10 h-7 md:h-10 md:w-12"
                            // priority
                        />
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="flex flex-col gap-y-0 md:gap-y-3">
                            <h1 className="font-bold text-base md:text-xl text-mainTextColor">
                                David Karry
                            </h1>
                            <p className="font-medium text-blueColor text-sm md:text-base">
                                Web Developer
                            </p>
                        </div>
                        <img
                            height={38}
                            width={50}
                            alt="comment"
                            src="/images/Blogs/“.svg"
                            className="invisible md:visible"
                            // priority
                        />
                    </div>
                </div>
                <p className="text-grayColor text-xs mb-1">
                    Curabitur tristique, sem id sagittis varius, lacus ligula
                    mollis dui, ac condimentum felis metus ut nulla. Aenean ut
                    ultricies turpis, sed sollicitudin eros. Aliquam quis dui ut
                    diam lobortis dignissim ut aliquet ex
                </p>
            </div>
        </div>
    );
};

export default Card;
