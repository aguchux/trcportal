import mongoose, { Schema } from 'mongoose';

export interface SettingsAttrs {
    _id?: Schema.Types.ObjectId,
    keyTitle: string;
    keyName: string;
    keyValue: string;
    createdAt?: string;
    updatedAt?: string;
}

const settingsSchema = new Schema<SettingsAttrs>({
    keyTitle: {
        type: String,
        required: true,
    },
    keyName: {
        type: String,
        required: true,
        unique: true,
    },
    keyValue: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});


const Setting = mongoose.models.Setting || mongoose.model<SettingsAttrs>("Setting", settingsSchema);

export { Setting };