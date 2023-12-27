import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Setting } = await dbCon();
    const {
        keyTitle,
        keyName,
        keyValue,
        keyType
    } = req.body;

    console.log(req.body);

    try {
        const created = await Setting.create({
            keyTitle,
            keyName,
            keyValue,
            keyType
        });
        if (!created) {
            return res.status(401).json({ success: false, message: "Settings not created" });
        }
        return res.status(200).json({ success: true, data: created });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export default handler;
