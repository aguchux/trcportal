import mongoose, { Schema, Document } from 'mongoose';

export interface SiteAttrs {

    name: string;
    title: string;
    description: string;
    keywords: string;

    phone: string;
    email: string;
    address: string;

    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    whatsapp: string;

}

interface SiteDoc extends Document {
    name: string;
    title: string;
    description: string;
    keywords: string;

    phone: string;
    email: string;
    address: string;

    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    whatsapp: string;
}

interface SiteModel extends mongoose.Model<SiteDoc> {
    build(attrs: SiteAttrs): SiteDoc;
}

const siteSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    keywords: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },

    facebook: {
        type: String,
        required: true,
        trim: true,
    },
    twitter: {
        type: String,
        required: true,
        trim: true,
    },
    instagram: {
        type: String,
        required: true,
        trim: true,
    },
    linkedin: {
        type: String,
        required: true,
        trim: true,
    },
    youtube: {
        type: String,
        required: true,
        trim: true,
    },
    whatsapp: {
        type: String,
        required: true,
        trim: true,
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

siteSchema.statics.build = (attrs: SiteAttrs) => {
    return new Website(attrs);
};

const Website = mongoose.model<SiteAttrs, SiteModel>("Website", siteSchema);

export { Website };