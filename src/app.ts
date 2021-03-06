import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { MongooseHelper } from '../util/MongooseHelper';
import { Config } from './config/Config';
import { EventController } from './controllers/EventController';
import { AccessController } from './controllers/AccessListController';

const fileUpload = require('express-fileupload');
var express = require('express')
var cors = require('cors')
var app = express()
const PORT = process.env.PORT || 3000

export class App extends Server {
    

    constructor() {
        super(process.env.NODE_ENV === 'development'); // setting showLogs to true
        this.app.use(fileUpload({
            createParentPath: true
        }));
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.setupControllers();
    }

    private setupControllers(): void {
        const urlDB = new Config().getDB();
        MongooseHelper.connect(urlDB)
            .then(() => {
                console.log('Mongoose connected')
            })
            .catch(err => {
                console.log(err);
            })
        const eventController = new EventController();
        const accessController = new AccessController();
        super.addControllers([eventController,accessController]/*, optional router here*/);
    }
  
    public start(): void {
        this.app.listen(PORT, () => {
            Logger.Imp('Server listening on port: ' + PORT);
        })
    }
}
