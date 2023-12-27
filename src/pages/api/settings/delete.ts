import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Setting } = await dbCon();
    const { _id } = req.body;
    try {
        const deleted = await Setting.findOneAndDelete({ _id });
        if (!deleted) {
            return res.status(404).json({ success: false, message: 'Setting not found' });
        }
        return res.status(201).json({ success: true, message: 'Setting deleted successfully', data: deleted });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }

}

export default handler;
