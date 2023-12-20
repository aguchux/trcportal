import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Application } = await dbCon();
    const {
        firstName,
        lastName,
        email,
        mobile,
        country,
        purpose,
        toStudy,
        countryToStudy,
        notes
    } = req.body;

    console.log(req.body);

    try {
        const created = await Application.create({
            firstName,
            lastName,
            email,
            mobile,
            country,
            purpose,
            toStudy,
            countryToStudy,
            notes
        });
        if (!created) {
            return res.status(401).json({ success: false, message: "Application not created" });
        }
        return res.status(200).json({ success: true, data: created });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export default handler;
