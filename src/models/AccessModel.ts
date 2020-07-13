import {Document, model, Model, Schema} from 'mongoose';

export interface Access extends Document {
    vkID: string,
    role: string,
    avatar: string,
    achievements: string,
    phoneNumber: string,
    birthday: string,
    fullName: string,
    latinFullName: string,
    personalEmail: string,
    town: string,
    university: string,
    universityPostalAddress: string,
    rectorFullName: string,
    rectorPostalAddress: string,
    statusInUniversity: string,
    facultyFull: string,
    facultyShortly: string,
    specialty: string,
    personalPostalAddress: string,
    clothingSize: string,
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
    latinFullName:{
        type: String,
        required: false,
    },
    personalEmail: {
        type: String,
        required: false,
    },
    town: {
        type: String,
        required: false,
    },
    universityPostalAddress: {
        type: String,
        required: false,
    },
    rectorFullName: {
        type: String,
        required: false,
    },
    rectorPostalAddress: {
        type: String,
        required: false,
    },
    statusInUniversity: {
        type: String,
        required: false,
    },
    facultyFull: {
        type: String,
        required: false,
    },
    facultyShortly: {
        type: String,
        required: false,
    },
    specialty: {
        type: String,
        required: false,
    },
    personalPostalAddress: {
        type: String,
        required: false,
    },
    clothingSize: {
        type: String,
        required: false,
    },
}

});

