import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import http from './axios';

export const getSsrRequest = async (
    url: string,
    ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
    const token = ctx.req.cookies['access_token'];

    try {
        const { data } = await http.get(
            `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}${url}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return data;
    } catch (error) {
        throw new Error("Can't get data from server");
    }
};
