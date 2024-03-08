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
        dispatch(removeFile({ type: 'conSolid', index }));
    };

    return (
        <div className="h-[550px] w-[300px] overflow-scroll">
            {pdfUrl.map((file: File, index: number) => {
                const fileUrl = URL.createObjectURL(file);
                return (
                    <div key={index} className="mb-6 relative overflow-hidden">
                        <embed
                            src={`${fileUrl}#toolbar=0&view=Fit&page=1#fullscreen`}
                            width="290"
                            height="380"
                        />
                        <button
                            className="absolute w-[290px] h-[380px] top-0 cursor-pointer"
                            onClick={() => handleClick(fileUrl)}
                        ></button>
                        <div className="text-3xl mx-28">
                            <RiDeleteBin6Line
                                className="text-red-600 cursor-pointer"
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
