export default async (req: any, res: any) => {
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.status(200).json({ ip: clientIp });
};
