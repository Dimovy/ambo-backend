import {Document, model, Model, Schema} from 'mongoose';

export interface Event extends Document {
    participationForm: string, 
    eventForm: string,
    nameEvent: string,
    date: string,
    eventType: string,
    eventPlace: string,
    description: string,
    companyRole: string,
    participants: number,
    participantsCallback: string,
    uploadsLinks: string,
    publicationLinks: string,
    notes: string,
    ambassador: string,
    university: string,
}

export const eventSchema: Schema = new Schema({
    participationForm: {
        type: String,
        required: true,
    },
    eventForm: {
        type: String,
        required: true,
    },
    eventPlace: {
        type: String,
        required: true,
    },
    nameEvent: {
        type: String,
        required: true,
    },
    eventType: {
        type: String,
        required: true,
    },
    participants: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
    ambassador: {
        type: String,
        required: true,
    },
    university: {
        type: String,
        required: true,
    },
    companyRole: {
        type: String,
        required: false,
    },
    participantsCallback: {
        type: String,
        required: false,
    },
    uploadsLinks: {
        type: String,
        required: false,
    },
    publicationLinks: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: false,
    },
});

