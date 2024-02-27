import React from 'react';

const PDFSmallViewer = ({
    pdfUrl,
}: {
    pdfUrl: string;
}) => {


    return (
        <div className="h-[600px] overflow-scroll-y">
            <embed
                src={`${pdfUrl}#page=1&toolbar=0&view=Fit#fullscreen`}
                width="300"
                height="600"
            ></embed>
        </div>
    );
};

export default PDFSmallViewer;
