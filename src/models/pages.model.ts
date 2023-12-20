import mongoose, { Schema } from 'mongoose';

export interface PageAttrs {
    _id?: Schema.Types.ObjectId,
    slug: string;
    parent?: Schema.Types.ObjectId;
    title: string;
    pageType: string;
    content: string;
    sortNumber?: number;
    views?: number;
    comments: [
        {
            name: string;
            email: string;
            comment: string;
        }
    ];
    createdAt?: string;
    updatedAt?: string;
}

const pageSchema = new Schema<PageAttrs>({
    slug: {
        type: String,
        trim: true,
        required: true,
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'Page',
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
    views: {
        type: Number,
        default: 0,
    },
    comments: [
        {
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
            comment: {
                type: String,
                trim: true,
                required: true,
            },
        }
    ],
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