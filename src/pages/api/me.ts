import { NextApiRequest, NextApiResponse } from "next";
import { decodeJwt } from "@/jwt";
import { getCookie } from 'cookies-next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = getCookie('token', { req, res });
    if (!token) {
        return res.json({ success: false, message: 'No token found' });
    }
    try {
        const jwt = await decodeJwt(token.toString());
        return res.status(200).json({ success: true, data: jwt });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export default handler;



