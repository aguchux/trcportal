import mongoose, { Schema } from 'mongoose';

export interface ApplicationAttrs {
    _id?: Schema.Types.ObjectId,
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    country?: string;
    purpose?: string;
    toStudy?: string;
    countryToStudy?: string;
    notes?: string;
    createdAt?: string;
    updatedAt?: string;
}


const applicationSchema = new Schema<ApplicationAttrs>({
    title: {
        type: String,
        enum: ["Mr.", "Mrs.", "Miss", "Dr.", "Prof.", "Rev."],
        default: "Mr.",
    }, 
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
    country: {
        type: String,
        trim: true,
    },
    purpose: {
        type: String,
        trim: true,
    },
    toStudy: {
        type: String,
        trim: true,
    },
    countryToStudy: {
        type: String,
        trim: true,
    },
    notes: {
        type: String,
        trim: true,
    },

}, {
    timestamps: true
});

const Application = mongoose.models.Application || mongoose.model<ApplicationAttrs>("Application", applicationSchema);

export { Application };