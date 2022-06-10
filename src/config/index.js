import dotenv from "dotenv";

dotenv.config();

export default {
    APP_NAME : process.env.APP_NAME,
    APP_PORT : process.env.APP_PORT,
    APP_MODE : process.env.APP_MODE,

    DB_HOST : process.env.DB_HOST,
    DB_USER : process.env.DB_USER,
    DB_PASSWORD : process.env.DB_PASSWORD,
    DB_NAME : process.env.DB_NAME,
    DB_PORT : process.env.DB_PORT,
}