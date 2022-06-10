import crudRouter from "./routes/crud";
import authRouter from "./routes/auth";

export default (app) => {

    crudRouter(app);
    authRouter(app);

    return app;
}