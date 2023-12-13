import mongoose, { Schema } from 'mongoose';

export interface AdminAttrs {
    _id?: Schema.Types.ObjectId,
    name: string;
    email: string;
    password: string;
    lastSeen: Date;
    createdAt?: string;
    updatedAt?: string;
}

const adminSchema = new Schema<AdminAttrs>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    lastSeen: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
});

const Admin = mongoose.models.Admin || mongoose.model<AdminAttrs>("Admin", adminSchema);

export { Admin };