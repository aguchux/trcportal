import mongoose, { Schema } from 'mongoose';

export interface PageAttrs {
    _id?: Schema.Types.ObjectId,
    title: string;
    slug: string;
    pageType: string;
    content: string;
    sortNumber?: number;
    createdAt?: string;
    updatedAt?: string;
}

const pageSchema = new Schema<PageAttrs>({
    slug: {
        type: String,
        trim: true,
        required: true,
    },
    title: {
        type: String,
        trim: true,
        required: true,
    },
    pageType: {
        type: String,
        default: 'PAGE',
    },
    content: {
        type: String,
    },
    sortNumber: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true
});

const Page = mongoose.models.Page || mongoose.model<PageAttrs>("Page", pageSchema);

export { Page };