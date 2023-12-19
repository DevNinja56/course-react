import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';

export const getSsrRequest = async (
    url: string,
    ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
    const token = ctx.req.cookies['access_token'];

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}${url}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );
        const { data } = await res.json();
        return data;
    } catch (error) {
        console.log(url, error);
        return null;
    }
};
