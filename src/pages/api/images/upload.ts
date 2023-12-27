// upload image api 
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import axios from 'axios';
import FormData from 'form-data';
import { v4 as uuidv4 } from 'uuid';
import { uploadMiddleware, } from '@/libs';
import { MulterError } from 'multer';
import { writeFile } from 'fs/promises'
import { dbCon } from '@/models';
import { imageKit } from '@/libs';
import { Express } from 'express';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const imageKidApiKey = process.env.IMAGEKIT_API_KEY;
    const imageKidApiSecret = process.env.IMAGEKIT_API_SECRET;
    try {


    } catch (error) {
        console.error('Error uploading image:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

}

export default handler;