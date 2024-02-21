import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface propsTypes {
    totalPage: number;
    page: number;
    refetch: (arg0: number) => void;
}

const PaginationBox: React.FC<propsTypes> = ({ totalPage, page, refetch }) => {
    const renderPaginationButtons = () => {
        const maxPagesToShow = 3; // Adjust this value as needed

        let pagesToRender: number[] = [];

        if (totalPage <= maxPagesToShow * 2 + 1) {
            pagesToRender = Array.from({ length: totalPage }, (_, i) => i + 1);
        } else {
            if (page <= maxPagesToShow) {
                pagesToRender = [...Array(maxPagesToShow * 2 + 1).keys()].map(
                    (i) => i + 1
                );
            } else if (page > totalPage - maxPagesToShow) {
                pagesToRender = [...Array(maxPagesToShow * 2 + 1).keys()].map(
                    (i) => totalPage - maxPagesToShow * 2 + i
                );
            } else {
                pagesToRender = [...Array(maxPagesToShow * 2 + 1).keys()].map(
                    (i) => page - maxPagesToShow + i
                );
            }
        }

        return pagesToRender.map((i) => (
            <button
                key={'pagination__button__' + i}
                onClick={() => refetch(i)}
                className={`font-medium cursor-pointer h-[39px] w-[39px] rounded-full  hover:bg-blue-600 hover:text-white flex items-center justify-center ${
                    page === i ? 'bg-blue-600 text-white' : 'text-darkGrayColor'
                }`}
            >
                {i}
            </button>
        ));
    };

    return (
        <>
            {totalPage > 1 && (
                <div className="w-full flex justify-center">
                    <div className="flex items-center gap-x-3">
                        <button
                            className="h-[39px] w-[39px] rounded-full hover:bg-blue-600 hover:text-white bg-profileBgColor flex items-center justify-center disabled:cursor-not-allowed "
                            disabled={page === 1}
                            onClick={() => refetch(page - 1)}
                        >
                            <BiChevronLeft />
                        </button>
                        {renderPaginationButtons()}
                        <button
                            className="h-[39px] w-[39px] rounded-full hover:bg-blue-600 hover:text-white bg-profileBgColor flex items-center justify-center disabled:cursor-not-allowed    "
                            disabled={page === totalPage}
                            onClick={() => refetch(page + 1)}
                        >
                            <BiChevronRight />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PaginationBox;
