import { NextApiRequest, NextApiResponse } from "next";
import { getCookie } from 'cookies-next';
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Testimonies } = await dbCon();
    try {
        const testimonies = await Testimonies.find({});
        return res.status(200).json({ success: true, data: testimonies });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export default handler;

