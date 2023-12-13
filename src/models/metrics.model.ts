import mongoose, { Schema } from 'mongoose';

// analytics schema
export interface MetricsAttrs {
    _id?: Schema.Types.ObjectId,
    ip: string;
    url: string;
    os?: string;
    browser?: string;
    device?: string;
    country?: string;
    referrer?: string;
    referrerType?: string;
    landingPage?: string;
    createdAt?: string;
    updatedAt?: string;
}

const metricsSchema = new Schema<MetricsAttrs>({
    ip: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    os: {
        type: String,
        required: false,
    },
    browser: {
        type: String,
        required: false,
    },
    device: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: false,
    },
    referrer: {
        type: String,
        required: false,
    },
    referrerType: {
        type: String,
        required: false,
    },
    landingPage: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});


const Metric = mongoose.models.Metric || mongoose.model<MetricsAttrs>("Metric", metricsSchema);

export { Metric };