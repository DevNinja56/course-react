import React from 'react';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';
import Image from 'next/image';

const HeadBox = () => {
    const { updateModal } = useUi();
    return (
        <div className="w-full px-5 md:px-[50px] lg:px-2 2xl:px-8 flex items-center justify-center mt-[100px] bg-profileBgColor py-20 relative mb-16">
            <Image
                height={193}
                width={191}
                alt="compareRound"
                className="absolute top-0 left-0 h-20 w-20 lg:h-[193px] lg:w-[193px]"
                src="/images/Blogs/Frame 642.svg"
                priority
            />
            <div className="flex flex-col gap-y-8 md:gap-y-12 items-center z-10 w-full md:w-auto">
                <div className="flex flex-col justify-center items-center gap-y-1">
                    <p className="text-blueColor text-lg md:text-xl font-bold">
                        Compare Courses
                    </p>
                    <h1 className="text-mainTextColor text-xl md:text-[32px] font-extrabold">
                        Compare Your Study Options
                    </h1>
                    <p className="text-base md:text-lg text-aboutUsTextColor">
                        You can compare upto 3 Universities
                    </p>
                </div>
                <div className="py-4 px-4 md:px-8 bg-white custom-shadow rounded-[10px] w-full md:w-auto">
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <button
                            onClick={() =>
                                updateModal({
                                    type: modalType.compare_university,
                                    state: { index: 'first' }
                                })
                            }
                            className="py-[14px] px-2 text-sm md:text-base md:px-[73px] rounded-[5px] bg-blueColor text-white font-semibold showModalBtn w-[46%] md:w-[48%] lg:w-auto"
                        >
                            Select Course1
                        </button>
                        <button
                            onClick={() =>
                                updateModal({
                                    type: modalType.compare_university,
                                    state: { index: 'second' }
                                })
                            }
                            className="py-[14px] px-2 text-sm md:text-base md:px-[73px] rounded-[5px] bg-blueColor text-white font-semibold showModalBtn w-[46%] md:w-[48%] lg:w-auto"
                        >
                            Select Course2
                        </button>
                        <button
                            onClick={() =>
                                updateModal({
                                    type: modalType.compare_university,
                                    state: { index: 'third' }
                                })
                            }
                            className="py-[14px] px-2 text-sm md:text-base md:px-[73px] rounded-[5px] bg-blueColor text-white font-semibold showModalBtn w-[46%] md:w-[48%] lg:w-auto"
                        >
                            Select Course3
                        </button>
                    </div>
                </div>
            </div>
            <Image
                height={193}
                width={191}
                alt="compare-round-2"
                className="absolute bottom-0 right-0 h-16 w-16 lg:h-[193px] lg:w-[193px]"
                src="/images/Blogs/Frame 643.svg"
                priority
            />
        </div>
    );
};

export default HeadBox;
