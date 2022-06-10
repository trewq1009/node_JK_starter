import expressLoader from "./express";
import databaseLoader from "./database";
import Logger from "./logger";

export default async (app) => {
    // Database connection
    const dbConnection = await databaseLoader();
    Logger.info('DataBase Intialized');

    // application express load
    await expressLoader(app);
    Logger.info('Express Intialized');
}