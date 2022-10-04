import dotenv from "dotenv";

dotenv.config();

export default {
    APP_NAME : process.env.APP_NAME || "Test First App",
    APP_PORT : process.env.APP_PORT || 8000,
    APP_MODE : process.env.APP_MODE || "dev",

    DB_HOST : process.env.DB_HOST || "localhost",
    DB_USER : process.env.DB_USER || "admin",
    DB_PASSWORD : process.env.DB_PASSWORD || "Rhksflwk1!",
    DB_NAME : process.env.DB_NAME || "iderms_config",
    DB_PORT : process.env.DB_PORT || 3306,

    COOKIE_SECRET : process.env.COOKIE_SECRET || 'test',
}