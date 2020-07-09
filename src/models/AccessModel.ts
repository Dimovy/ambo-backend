import {Document, model, Model, Schema} from 'mongoose';

export interface Access extends Document {
    vkID: string,
    role: string,
    avatar: string,
    achievements: string,
    phoneNumber: string,
    birthday: string,
    fullName: string,
    university: string
}

export const accessSchema: Schema = new Schema({
    vkID: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        required: false,
    },
    achievements: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: false,
    },
    birthday: {
        type: String,
        required: false,
    },
    fullName: {
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

