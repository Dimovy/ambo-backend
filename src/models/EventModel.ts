import {Document, model, Model, Schema} from 'mongoose';

export interface Estimation extends Document {
    organisation: number,
    infoSupport: number,
    materialSupport: number,
    callback: number
}

export interface Event extends Document {
    nameEvent: string,
    date: string,
    participants: number,
    description: string,
    ambassador: string,
    university: string,
    estimation: Estimation,
}

export const eventSchema: Schema = new Schema({
    nameEvent: {
        type: String,
        required: true,
    },
    participants: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    ambassador: {
        type: String,
        required: true,
    },
    university: {
        type: String,
        required: true,
    },
    estimation:{
        organisation: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        infoSupport: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        materialSupport: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        callback: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
    },
});

