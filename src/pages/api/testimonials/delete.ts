import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Testimonies } = await dbCon();
    const { id } = req.query;
    try {
        const deleted = await Testimonies.findOneAndDelete({ _id: id });
        if (!deleted) {
            return res.status(404).json({ success: false, message: 'Testimony not found' });
        }
        return res.status(201).json({ success: true, message: 'Testimony deleted successfully', data: deleted });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }

}

export default handler;
