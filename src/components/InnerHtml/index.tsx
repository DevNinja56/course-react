import React from 'react';

const InnerHtml = ({ html }: { html: string }) => {
    return <p dangerouslySetInnerHTML={{ __html: html }}></p>;
};

export default InnerHtml;
