import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Page } = await dbCon();
    try {
        // pages sort bu sortNumber
        const pages = await Page.find({ parent: 'home', pageType: 'Page' }).sort({ sortNumber: 1 });
        return res.status(200).json({ success: true, data: pages });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export default handler;

