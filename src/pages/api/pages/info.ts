import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Page } = await dbCon();
    const { slug } = req.query;
    try {
        const page = await Page.findOne({ slug: slug });
        if (!page) {
            return res.status(404).json({ success: false, message: 'Page not found' });
        }
        return res.status(200).json({ success: true, data: page });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}
export default handler;
