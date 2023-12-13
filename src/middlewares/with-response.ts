// Withh response middleware    
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const withApiResponse = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
    try {
        const result = await handler(req, res);
        const status = res.statusCode;
        const data = req.query;
        console.log('data', data);
        // return res.status(status).json({ success: true, message: '', data });
    } catch (error: any) {
        // Send an error response
        // return res.status(500).json({ success: false, message: error.message, data: null });
    }
};

export default withApiResponse;