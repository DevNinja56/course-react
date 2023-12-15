import { NextPageContext } from 'next';

export const getIp = (ctx: NextPageContext) => {
    const { req } = ctx;
    const ip = req?.headers['x-forwarded-for'] || req?.socket?.remoteAddress;
    return { ip };
};
