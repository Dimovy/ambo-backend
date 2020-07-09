import {Document, model, Model, Schema} from 'mongoose';

export interface Access extends Document {
    vkID: string,
    role: string,
    avatar: string,
    achievements: string,
    university: string
}

export const accessSchema: Schema = new Schema({
    vkID: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    achievements: {
        type: String,
        required: false,
    },
    university: {
        type: String,
        required: false,
    },
    avatar: {
        type: String,
        required: false,
    },

});

