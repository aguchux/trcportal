import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Setting } = await dbCon();
    const { keyName } = req.query;
    try {
        const setting = await Setting.findOne({ keyName });
        if (!setting) {
            return res.status(404).json({ success: false, message: 'Settings not found' });
        }
        return res.status(200).json({ success: true, data: setting });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}
export default handler;
