import React from 'react';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';
import Image from 'next/image';

const HeadBox = () => {
    const { updateModal } = useUi();
    return (
        <div className="w-full flex items-center justify-center mt-[100px] bg-profileBgColor py-20 print:py-0 relative mb-16 ">
            <Image
                height={193}
                width={191}
                alt="compareRound"
                className="absolute top-0 left-0 print:hidden "
                src="/images/Blogs/Frame 642.svg"
                priority
            />
            <div className="flex flex-col gap-y-12 print:gap-y-0 print:py-4 items-center z-10">
                <div className="flex flex-col justify-center items-center gap-y-1">
                    <p className="text-blueColor text-xl font-bold">
                        Compare Courses
                    </p>
                    <h1 className="text-mainTextColor text-[32px] font-extrabold">
                        Compare Your Study Options
                    </h1>
                    <p className="text-lg text-aboutUsTextColor">
                        You can compare upto 3 Universities
                    </p>
                </div>
                <div className="py-4 px-8 bg-white custom-shadow rounded-[10px] print:hidden">
                    <div className="flex items-center gap-x-5">
                        <button
                            onClick={() =>
                                updateModal({
                                    type: modalType.compare_university,
                                    state: { index: 'first' }
                                })
                            }
                            className="py-[14px] px-[73px] rounded-[5px] bg-blueColor text-white font-semibold showModalBtn"
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
                            className="py-[14px] px-[73px] rounded-[5px] bg-blueColor text-white font-semibold showModalBtn"
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
                            className="py-[14px] px-[73px] rounded-[5px] bg-blueColor text-white font-semibold showModalBtn"
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
                className="absolute bottom-0 right-0 print:hidden"
                src="/images/Blogs/Frame 643.svg"
                priority
            />
        </div>
    );
};

export default HeadBox;
