import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import { accessSchema } from '../models/AccessModel';
import { AccessListService } from '../services/AccessListService';

const path = require('path');
const multer = require('multer');

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

    @Post('avatar')
    private async uploadAvatar(req: Request, res: Response) {

        await this.accessListService.deleteAccessByVkID(req.body)
            .then((access) => {
                res.status(200).send(access);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }

    @Post('update')
    private async updateAccess(req: Request, res: Response) {
        await this.accessListService.updateAccess(req.body)
            .then((access) => {
                res.status(200).send(access);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }

    @Post('find')
    private async getAccessByVkID(req: Request, res: Response) {
        await this.accessListService.getAccessByVkID(req.body)
            .then((access) => {
                res.status(200).send(access);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }
    @Post('role')
    private async getAccessByRole(req: Request, res: Response) {
        await this.accessListService.getAccessByRole(req.body)
            .then((access) => {
                res.status(200).send(access);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }
}

