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
    participants: string,
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
        required: false,
    },
    eventForm: {
        type: String,
        required: false,
    },
    eventPlace: {
        type: String,
        required: false,
    },
    nameEvent: {
        type: String,
        required: false,
    },
    eventType: {
        type: String,
        required: false,
    },
    participants: {
        type: String,
        required: false,
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
        required: false,
    },
    university: {
        type: String,
        required: false,
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
        required: false,
    },
    notes: {
        type: String,
        required: false,
    },
});

