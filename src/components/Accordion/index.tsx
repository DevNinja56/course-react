'use client';
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { motion } from 'framer-motion';

interface propsType {
    isActive: boolean;
    title: string;
    content: string;
    activeFun: () => void;
}

const Accordion: React.FC<propsType> = ({
    isActive = false,
    title,
    content,
    activeFun
}) => {
    return (
        <>
            <button
                className="flex text-sm md:text-[16px] px-5 md:px-[30px] py-[25.5px] font-bold h-[72px] w-full items-center justify-between border-b border-grayColor border-opacity-10 bg-white z-30"
                onClick={activeFun}
            >
                <p>{title}</p>
                {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
            <motion.div
                className="overflow-hidden "
                initial={isActive ? 'open' : 'collapsed'}
                animate={isActive ? 'open' : 'collapsed'}
                exit="collapsed"
                variants={{
                    open: { maxHeight: 1000, padding: '40px 20px' },
                    collapsed: { maxHeight: 0, padding: '0px 20px' }
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                {content}
            </motion.div>
        </>
    );
};

export default Accordion;
