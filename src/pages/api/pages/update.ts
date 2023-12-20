import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Page } = await dbCon();
    // const { pageId } = req.query;
    const { pageId, title, pageType, sortNumber, slug, content } = req.body;
    try {
        // count pages with slug=slug
        const page = await Page.findOneAndUpdate({ _id: pageId }, { title, pageType, slug, content, sortNumber }, { new: true });
        if (!page) {
            return res.status(400).json({ success: false, message: "Page not updated" });
        }
        return res.status(200).json({ success: true, data: page });

    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }

}

export default handler;
