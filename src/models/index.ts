import mongoose from 'mongoose';
import { Admin } from './admins.model';

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/trc-db';

export const dbCon = async () => {
    try {
        await mongoose.connect(uri);
        console.log('DB connected...');
    } catch (error) {
        console.log(error);
    }
    return {
        Admin,
    }
}