import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Setting } = await dbCon();
    const { _id, keyValue } = req.body;
    try {
        const updated = await Setting.findOneAndUpdate({ _id }, { keyValue: keyValue });
        if (!updated) {
            return res.status(400).json({ success: false, message: "Setting updated failed" });
        }
        // console.log(updated);
        return res.status(400).json({ success: true, message: "Setting updated" });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export default handler;
