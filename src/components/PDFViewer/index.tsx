import React from 'react';

const PDFViewer = ({ pdfUrl }: { pdfUrl: string }) => {

    return (
        <div>
             <embed src={`${pdfUrl}#toolbar=0&view=Fit#fullscreen`} width="500" height="600" ></embed>
        </div>
    );
};

export default PDFViewer;
