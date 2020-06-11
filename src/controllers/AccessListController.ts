import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import { accessSchema } from '../models/AccessModel';
import { AccessListService } from '../services/AccessListService';

@Controller('access')
export class AccessController {

    private accessListService: AccessListService;

    constructor() {
        this.accessListService = new AccessListService(accessSchema);
    }

    @Get()
    private async getAccess(req: Request, res: Response) {
        await this.accessListService.getAllAccess()
            .then((access) => {
                res.status(200).send(access);
            })
            .catch((err) => {
                res.status(400).send(err);
            })
    }

    @Post()
    private async addAccess(req: Request, res: Response) {
        await this.accessListService.createAccess(req.body)
            .then((createdAccess) => {
                res.status(200).send(createdAccess);
            })
            .catch((err) => {
                res.status(400).send(err);
            })
    }

    @Post('delete')
    private async deleteAccessByVkID(req: Request, res: Response) {
        await this.accessListService.deleteAccessByVkID(req.body)
            .then((access) => {
                res.status(200).send(access);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }

    @Post('university')
    private async getEventsByUniversity(req: Request, res: Response) {
        await this.eventService.getEventByUniversity(req.body)
            .then((Events) => {
                res.status(200).send(Events);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }
}

