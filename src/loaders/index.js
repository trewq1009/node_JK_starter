import expressLoader from "./express";
import databaseLoader from "./database";
import dependencyLoader from "./dependencyInjector";
import Logger from "./logger";

export default async (app) => {
    // Database connection
    const dbConnection = await databaseLoader();
    Logger.info('DataBase Intialized');

    // Dependency injection
    await dependencyLoader(dbConnection);
    Logger.info('Dependency Injector loaded');


    // application express load
    await expressLoader(app);
    Logger.info('Express Intialized');
}