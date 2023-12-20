import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";
import { Console } from "console";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Contact } = await dbCon();

    const {
        name,
        email,
        mobile,
        subject,
        message
    } = req.body;

    console.log(req.body);

    try {
        const created = await Contact.create({
            name,
            email,
            mobile,
            subject,
            message
        });
        if (!created) {
            return res.status(401).json({ success: false, message: "Caontacts not created" });
        }
        return res.status(200).json({ success: true, data: created });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export default handler;
