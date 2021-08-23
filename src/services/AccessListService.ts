import { Access } from '../models/AccessModel';
import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { Request } from 'express';

export class AccessListService {

    private accessModel: mongoose.Model<mongoose.Document>;

    constructor(accessSchema: Schema) {
        this.accessModel = mongoose.model<Access>('access', accessSchema);
    }

    public getAllAccess() {
        return new Promise(async (resolve, reject) => {
            await this.accessModel.find()
                .then((resBD) => {
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public createAccess(newAccess: Access) {
        return new Promise(async (resolve, reject) => {
            await this.accessModel.create(newAccess)
                .then((resBD) => {
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public deleteAccessByVkID(vkID: string) {
        return new Promise(async (resolve, reject) => {
            await this.accessModel.remove(vkID)
                .then((resBD) => {
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public updateAccess(newAccess: Access) {
        return new Promise(async (resolve, reject) => {
            await this.accessModel.findByIdAndUpdate(newAccess._id, { $set: newAccess })
                .then(resBD => {
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public getAccessByVkID(vkID: string) {
        return new Promise(async (resolve, reject) => {
            await this.accessModel.find(vkID)
                .then((resBD) => {
                    resolve(resBD);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
    public getAccessByRole(reqRole: any) {
        const { role } = reqRole
        let filtredResBd = []
        return new Promise(async (resolve, reject) => {
            await this.accessModel.find(reqRole)
                .then((resBD) => {
                    if (role === 'ambassador' || role === 'mentor') {
                        filtredResBd = resBD.filter((elem: any) => {
                            if (elem.generation && elem['generation'] === '4') {
                                return elem
                            }
                        })
                    } else {
                        filtredResBd = resBD
                    }
                    resolve(filtredResBd)
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}
