import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Page } = await dbCon();
    const { title, parent, pageType, sortNumber, slug, content } = req.body;
    console.log(sortNumber);
    try {
        // count pages with slug=slug
        let newSlug;
        const countPage: number = await Page.countDocuments({ slug });
        if (countPage > 0) {
            newSlug = `${slug}_${countPage + 1}`;
        } else {
            newSlug = slug;
        }
        const page = await Page.create({ title, parent, pageType, slug: newSlug, content, sortNumber });
        if (!page) {
            return res.status(400).json({ success: false, message: "Page not created" });
        }
        return res.status(201).json({ success: true, data: page });

    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }

}

export default handler;
