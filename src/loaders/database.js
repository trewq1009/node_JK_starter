import db from "mysql";
import config from "../config/index";
import {Logger} from "./logger";

export default async () => {
    Logger.info('DB (Mysql) Create Connection');
    let connection = db.createConnection({
        host     : config.DB_HOST,
        user     : config.DB_USER,
        password : config.DB_PASSWORD,
        database : config.DB_NAME,
        port     : config.DB_PORT
    });

    try {
        Logger.info('DB Connecting.....');
        connection.connect(err => {
            if(err) Logger.error('DB connection Error : ' + err);
        });
    } catch (e) {
        Logger.info('DB Connecting Error!!!!');
        Logger.debug(`DB Connecting Error Message: ${e.message}`);
    }
    
    return connection
}