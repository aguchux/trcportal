import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Admin } = await dbCon();
    const { name, email, password } = req.body;
    const user = await Admin.findOne({ where: { email } });
    if (user) {
        return res.status(400).json({ success: false, message: "User already exists" });
    }
    const newUser = await Admin.create({ name, email, password });
    return res.status(201).json({ success: true, data: newUser });
}

export default handler;
