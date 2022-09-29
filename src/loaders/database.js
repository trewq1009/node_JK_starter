import db from "mysql";
import config from "../config/index";
import Logger from "./logger";

export default async () => {
    Logger.info('DB connecting...');
    let connection = db.createConnection({
        host     : config.DB_HOST,
        user     : config.DB_USER,
        password : config.DB_PASSWORD,
        database : config.DB_NAME,
        port     : config.DB_PORT
      });
    connection.connect(err => {
      if(err) Logger.error('DB connection Error : ' + err);
    });
    return connection
}