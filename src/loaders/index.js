import expressLoader from "./express";
import databaseLoader from "./database";

export default async (app) => {
    // Database connection
    const dbConnection = await databaseLoader();
    console.log('DataBase Intialized')
    

    // application express load
    await expressLoader(app);
    console.log('Express Intialized')
}