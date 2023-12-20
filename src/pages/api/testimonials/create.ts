import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Testimonies } = await dbCon();
    const {
        title,
        firstName,
        lastName,
        testimony,
        photoUrl,
        videoUrl,
        useVideo,
    } = req.body;


    try {
        const created = await Testimonies.create({
            title,
            firstName,
            lastName,
            testimony,
            photoUrl,
            videoUrl,
            useVideo,
        });

        console.log(created);

        if (!created) {
            return res.status(401).json({ success: false, message: "Testimony not created" });
        }
        return res.status(200).json({ success: true, data: created });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export default handler;
