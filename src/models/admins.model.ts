import mongoose, { Schema, Document } from 'mongoose';

export interface AdminAttrs {
    name: string;
    email: string;
    password: string;
}

interface AdminDoc extends Document {
    name: string;
    email: string;
    password?: string;
}

interface AdminModel extends mongoose.Model<AdminDoc> {
    build(attrs: AdminAttrs): AdminDoc;
}

const adminSchema = new Schema({
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
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    }
});

adminSchema.statics.build = (attrs: AdminAttrs) => {
    return new Admin(attrs);
};

const Admin = mongoose.model<AdminAttrs, AdminModel>("Admin", adminSchema);

export { Admin };