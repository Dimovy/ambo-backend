import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import { eventSchema } from '../models/EventModel';
import { EventService } from '../services/EventService';

@Controller('event')
export class EventController {

    private eventService: EventService;

    constructor() {
        this.eventService = new EventService(eventSchema);
    }

    @Get()
    private async getEvents(req: Request, res: Response) {
        await this.eventService.getAllEvents()
            .then((events) => {
                res.status(200).send(events);
            })
            .catch((err) => {
                res.status(400).send(err);
            })
    }

    @Post()
    private async addEvent(req: Request, res: Response) {
        await this.eventService.createEvent(req.body)
            .then((createdEvent) => {
                res.status(200).send(createdEvent);
            })
            .catch((err) => {
                res.status(400).send(err);
            })
    }
    

    @Post('date')
    private async getEventsByDate(req: Request, res: Response) {
        await this.eventService.getEventByDate(req.body)
            .then((events) => {
                res.status(200).send(events);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }

    @Post('delete')
    private async deleteEventById(req: Request, res: Response) {
        await this.eventService.deleteEventById(req.body)
            .then((event) => {
                res.status(200).send(event);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }

    @Post('update')
    private async updateEvent(req: Request, res: Response) {
        await this.eventService.updateEvent(req.body)
            .then((event) => {
                res.status(200).send(event);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }

    @Post('ambassador')
    private async getEventsByAmbassador(req: Request, res: Response) {
        await this.eventService.getEventByAmbassador(req.body)
            .then((events) => {
                res.status(200).send(events);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }

    @Post('upload-avatar')
    private async uploadAvatar(req: Request, res: Response) {
        let avatar = req.file;
        avatar.mv('./uploads/' + avatar.name);
        await this.eventService.getEventByAmbassador(req.body)
            .then((roadToAvatar) => {
                res.status(200).send(roadToAvatar);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }

    @Post('university')
    private async getEventsByUniversity(req: Request, res: Response) {
        await this.eventService.getEventByUniversity(req.body)
            .then((events) => {
                res.status(200).send(events);
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }
}

