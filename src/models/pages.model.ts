import mongoose, { Schema, Document } from 'mongoose';

export interface PageAttrs {
    slug: string;
    title: string;
    description?: string;
    content?: string;
}

interface PageDoc extends Document {
    slug: string;
    title: string;
    description?: string;
    content?: string;
}

interface PageModel extends mongoose.Model<PageDoc> {
    build(attrs: PageAttrs): PageDoc;
}

const pageSchema = new Schema({
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
    description: {
        type: String,
        trim: true,
    },
    content: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
});

pageSchema.statics.build = (attrs: PageAttrs) => {
    return new Page(attrs);
};

const Page = mongoose.model<PageAttrs, PageModel>("Page", pageSchema);

export { Page };