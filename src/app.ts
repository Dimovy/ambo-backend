import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { MongooseHelper } from '../util/MongooseHelper';
import { Config } from './config/Config';
import { EventController } from './controllers/EventController';

const fileUpload = require('express-fileupload');

export class App extends Server {
    

    constructor() {
        super(process.env.NODE_ENV === 'development'); // setting showLogs to true
        this.app.use(fileUpload({
            createParentPath: true
        }));
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
        super.addControllers([eventController]/*, optional router here*/);
    }

    public start(): void {
        this.app.listen(process.env.PORT || 3000, () => {
            Logger.Imp('Server listening on port: ' + process.env.PORT || 3000);
        })
    }
}
