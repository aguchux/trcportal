import mongoose, { Schema } from 'mongoose';

export interface TestimoniesAttrs {
    _id?: Schema.Types.ObjectId,
    title: string;
    firstName: string;
    lastName: string;
    testimony: string;
    photoUrl?: string;
    videoUrl?: string;
    useVideo?: boolean;
    createdAt?: string;
    updatedAt?: string;
}


const testimoniesSchema = new Schema<TestimoniesAttrs>({
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
    testimony: {
        type: String,
        trim: true,
    },
    photoUrl: {
        type: String,
        trim: true,
    },
    videoUrl: {
        type: String,
        trim: true,
    },
    useVideo: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
    },
}, {
    timestamps: true
});

const Testimonies = mongoose.models.Testimonies || mongoose.model<TestimoniesAttrs>("Testimonies", testimoniesSchema);

export { Testimonies };