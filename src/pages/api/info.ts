import { NextApiRequest, NextApiResponse } from "next";
import { decodeJwt } from "@/jwt";
import { getCookie } from 'cookies-next';
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const req_token = req.query.token;
    const token = getCookie('token', { req, res });

    const { Admin } = await dbCon();

    if (!token || !req_token) {
        return res.json({ success: false, message: 'No token found' });
    }

    if (req_token && token && req_token !== token) {
        return res.json({ success: false, message: 'Token mismatch or missing' });
    }

    try {
        const info = await decodeJwt(req_token.toString());
        if (!info) {
            return res.status(401).json({ success: false, message: "Admin not found" });
        }
        const admin = await Admin.findById(info.id);
        if (!admin) {
            return res.status(401).json({ success: false, message: "Admin not found" });
        }
        return res.status(200).json({ success: true, data: admin });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export default handler;



