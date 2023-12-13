import mongoose, { Schema } from 'mongoose';

export interface ContactAttrs {
    _id?: Schema.Types.ObjectId,
    name: string;
    email: string;
    mobile: string;
    subject: string;
    message: string;
    createdAt?: string;
    updatedAt?: string;
}

const contactSchema = new Schema<ContactAttrs>({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    mobile: {
        type: String,
        trim: true,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    },

}, {
    timestamps: true
});

const Contact = mongoose.models.Contact || mongoose.model<ContactAttrs>("Contact", contactSchema);

export { Contact };