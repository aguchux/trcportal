import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Setting } = await dbCon();
    try {
        const settings = await Setting.find({});
        return res.status(200).json({ success: true, data: settings });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export default handler;