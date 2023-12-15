const getIp = async (req, res) => {
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    res.status(200).json({ ip: clientIp });
};

export default getIp;
