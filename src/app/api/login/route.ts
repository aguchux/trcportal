import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { dbCon } from "@/models";
import { generateJwt } from "@/jwt";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { Admin } = await dbCon();
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email, password } });
    if (!admin) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 200 });
    }
    const jwt = generateJwt({ id: admin.id, email: admin.email });
    return NextResponse.json({ data: jwt }, { status: 200 });
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 200 });
}




