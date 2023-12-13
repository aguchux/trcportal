import mongoose, { Schema } from 'mongoose';

export interface ApplicationAttrs {
    _id?: Schema.Types.ObjectId,
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    message: string;
    subject: string;
    selfResume: string;
    createdAt?: string;
    updatedAt?: string;
}

const applicationSchema = new Schema<ApplicationAttrs>({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
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
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zip: {
        type: String,
    },
    country: {
        type: String,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    },
    selfResume: {
        type: String,
    },

}, {
    timestamps: true
});

const Application = mongoose.models.Application || mongoose.model<ApplicationAttrs>("Application", applicationSchema);

export { Application };