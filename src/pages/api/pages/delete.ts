import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Page } = await dbCon();
    const { slug } = req.query;
    try {
        const deleted = await Page.findOneAndDelete({ slug: slug });
        if (!deleted) {
            return res.status(404).json({ success: false, message: 'Page not found' });
        }
        return res.status(201).json({ success: true, message: 'Page deleted successfully', data: deleted });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }

}

export default handler;
