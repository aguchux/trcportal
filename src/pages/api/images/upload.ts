// // upload image api 
// import { NextApiRequest, NextApiResponse } from 'next';
// import formidable from 'formidable';

// import { dbCon } from '@/models';
// import { Image } from '@/models/image.model';

// async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const { Image } = await dbCon();

//     const form = new formidable.IncomingForm();
//     form.uploadDir = "./public/uploads";
//     form.keepExtensions = true;
//     form.parse(req, async (err, fields, files) => {
//         if (err) {
//             return res.status(500).json({ success: false, message: err.message });
//         }
//         const { name, description } = fields;
//         const { path } = files.image;
//         try {
//             const created = await Image.create({
//                 name,
//                 description,
//                 path
//             });
//             if (!created) {
//                 return res.status(401).json({ success: false, message: "Image not created" });
//             }
//             return res.status(200).json({ success: true, data: created });
//         } catch (error: any) {
//             return res.status(500).json({ success: false, message: error.message });
//         }
//     });
// }