import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";
import { generateJwt } from "@/jwt";
import { setCookie } from 'cookies-next';
import cookieHelper

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Admin } = await dbCon();
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({ success: false, message: "Admin not found" });
        }
        const jwt = generateJwt({ id: admin.id, name: admin.name, email: admin.email, role: admin.role });
        setCookie('token', jwt, { 
            req, res, 
            maxAge: 3600, 
            path: '/', 
            secure: process.env.NODE_ENV !== 'development', 
            sameSite: 'strict' 
        });
        return res.status(200).json({
            success: true, data: {
                id: admin.id,
                name: admin.name,
                email: admin.email,
                role: admin.role
            }
        });
    } catch (error: any) {
        return res.status(200).json({ success: false, message: error.message });
    }
}

export default handler;




