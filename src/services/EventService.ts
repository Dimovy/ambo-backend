import {Event, Estimation} from '../models/EventModel';
import * as mongoose from "mongoose";
import {Schema} from "mongoose";

export class EventService {

    private eventModel: mongoose.Model<mongoose.Document>;

    constructor(eventSchema: Schema) {
        this.eventModel = mongoose.model<Event>('Event', eventSchema);
    }

    public getAllEvents() {
        return new Promise(async (resolve, reject) => {
            await this.eventModel.find()
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public createEvent(newEvent: Event) {
        return new Promise(async(resolve, reject) => {
            await this.eventModel.create(newEvent)
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public updateEvent(newEvent: Event) {
        return new Promise(async (resolve, reject) => {
           await this.eventModel.findByIdAndUpdate(newEvent.id, newEvent)
                .then(resBD => {
                    resolve(resBD);
                })
               .catch(err => {
                   reject(err);
               })
        })
    }

    public getEventById(id: string) {
        return new Promise( async (resolve, reject) => {
            await this.eventModel.findById(id)
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
    public getEventByAmbassador(ambassador: string) {
        return new Promise( async (resolve, reject) => {
            await this.eventModel.find(ambassador)
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
    public getEventByUniversity(university: string) {
        return new Promise( async (resolve, reject) => {
            await this.eventModel.find(university)
                .then((resBD) =>{
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}
