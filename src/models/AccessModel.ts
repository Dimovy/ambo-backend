import {Document, model, Model, Schema} from 'mongoose';

export interface Access extends Document {
    vkID: number,
    role: string,
    avatar: string,
    achievements: string[]
}

export const accessSchema: Schema = new Schema({
    vkID: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        required: true,
    },
    achievements: [{
        type: String,
        required: false,
    }],
    avatar: {
        type: String,
        required: false,
    },

});

