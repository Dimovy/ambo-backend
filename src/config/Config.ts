export class Config {
    urlDB: string;

    constructor() {
        this.urlDB = 'mongodb+srv://Dmitry:d49TWkwi1dRTwPsG@ambo-cluster-ryp2d.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority';
    }


    public getDB(): string {
        return this.urlDB;
    }

}
