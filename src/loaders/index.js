import expressLoader from "./express";
import databaseLoader from "./database";
import {logger} from "./logger";

export default async (app) => {
    // Database connection
    const dbConnection = await databaseLoader();
    logger.info('DataBase Intialized');

    // application express load
    await expressLoader(app);
    logger.info('Express Intialized');
}