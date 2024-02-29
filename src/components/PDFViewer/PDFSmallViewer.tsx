import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { removeFile } from '@/store/slices/apply.slice';

const PDFSmallViewer = ({
    pdfUrl,
    onFileClick
}: {
    pdfUrl: File[];
    onFileClick: (fileUrl: string) => void;
}) => {
    const dispatch = useDispatch();
    const handleClick = (fileUrl: string) => {
        onFileClick(fileUrl);
    };

    const handleFileRemoval = (index: number) => {
        dispatch(removeFile({ type: 'passport', index }));
    };

    return (
        <div className="h-[550px] w-[300px] overflow-scroll">
            {pdfUrl.map((file: File, index: number) => {
                const fileUrl = URL.createObjectURL(file);
                return (
                    <div key={index} className="mb-6 relative">
                        <embed
                            src={`${fileUrl}?page=1&toolbar=0&view=Fit#fullscreen`}
                            width="290"
                            height="450"
                        />
                        <button className='absolute w-[290px] h-[450px] top-0'  onClick={() => handleClick(fileUrl)}></button>
                        <div className="text-3xl mx-28">
                            <RiDeleteBin6Line
                                className="text-red-600"
                                onClick={() => handleFileRemoval(index)}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PDFSmallViewer;
