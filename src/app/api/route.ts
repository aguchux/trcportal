import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 200 });
}
export async function POST(req: NextApiRequest, res: NextApiResponse) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 200 });
}




