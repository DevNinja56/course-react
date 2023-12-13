/* eslint-disable @typescript-eslint/no-explicit-any */
const handle = async (req: any, res: any) => {
    const clientIp =
        req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.status(200).json({ ip: clientIp });
};

export default handle;
