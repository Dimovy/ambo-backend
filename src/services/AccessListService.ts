import { Access } from '../models/AccessModel';
import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { Request } from 'express';

/* const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req: Request, file: any, cb: any) => {
        cb(null, '../uploads');
    },
    filename: (req: Request, file: any, cb: any) => {
        cb(null, "Avatar" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage,
    limits: { fieldSize: 2 * 1024 * 1024 },
    fileFilter: (req: Request, file: any, cb: any) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
            const err = new Error('Wrong extention!')
            return cb(err)
        }
        cb(null, true)
    }
}).single('file') */

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
            await this.accessModel.findByIdAndUpdate(newAccess.id, newAccess)
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
}
