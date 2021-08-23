import { Event } from '../models/EventModel';
import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import moment = require('moment');

export class EventService {

    private eventModel: mongoose.Model<mongoose.Document>;

    constructor(eventSchema: Schema) {
        this.eventModel = mongoose.model<Event>('Event', eventSchema);
    }

    public getAllEvents() {
        let filtredResBd = []
        return new Promise(async (resolve, reject) => {
            await this.eventModel.find()
                .then((resBD) => {
                    filtredResBd = resBD.filter((elem: any, i: any) => {

                        if (!moment(elem.date, 'DD.MM.YYYY').isBefore('2021-08-31')) {
                            return elem
                        }
                    })
                    resolve(filtredResBd);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public createEvent(newEvent: Event) {
        return new Promise(async (resolve, reject) => {
            await this.eventModel.create(newEvent)
                .then((resBD) => {
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public deleteEventById(id: string) {
        return new Promise(async (resolve, reject) => {
            await this.eventModel.remove(id)
                .then((resBD) => {
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public updateEvent(newEvent: Event) {
        return new Promise(async (resolve, reject) => {
            await this.eventModel.findByIdAndUpdate(newEvent._id, { $set: newEvent })
                .then(resBD => {
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public getEventById(id: string) {
        return new Promise(async (resolve, reject) => {
            await this.eventModel.findById(id)
                .then((resBD) => {
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public getEventByDate(date: string) {
        let month = "/\\d{2}\\." + JSON.stringify(date).slice(9, 16) + "/"
        month = month.substring(0, 10) + "\\" + month.substring(10);
        return new Promise(async (resolve, reject) => {
            await this.eventModel.find({ "date": eval(month) })
                .then((resBD) => {
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
    public getEventByAmbassador(ambassador: string) {
        return new Promise(async (resolve, reject) => {
            await this.eventModel.find(ambassador)
                .then((resBD) => {
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
    public getEventByUniversity(university: string) {
        return new Promise(async (resolve, reject) => {
            await this.eventModel.find(university)
                .then((resBD) => {
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}
