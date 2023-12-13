import * as geoip from 'geoip-lite';

/* eslint-disable @typescript-eslint/no-explicit-any */
const handle = async (req: any, res: any) => {
    const clientIp =
        req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const geo = geoip.lookup(clientIp);

    geo
        ? res.status(200).json({ ip: clientIp, country: geo })
        : res.status(400).json({
              ip: clientIp,
              country: { error: 'Unable to determine location.' }
          });
};

export default handle;
