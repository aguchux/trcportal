import { NextApiRequest, NextApiResponse } from "next";
import { getCookie } from 'cookies-next';
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = getCookie('token', { req, res });
    if (!token) {
        return res.json({ success: false, message: 'No token found' });
    }
    const { Metric } = await dbCon();
    try {
        const metrics = await Metric.find({});
        return res.status(200).json({ success: true, data: metrics });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export default handler;

