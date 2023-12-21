import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "@/models";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { Contact } = await dbCon();
    const { id } = req.query;
    try {
        const deleted = await Contact.findOneAndDelete({ _id: id });
        if (!deleted) {
            return res.status(404).json({ success: false, message: 'Contact not found' });
        }
        return res.status(201).json({ success: true, message: 'Contact deleted successfully', data: deleted });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }

}

export default handler;
