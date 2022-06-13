import stateRouter from "./routes/state";
import crudRouter from "./routes/crud";
import authRouter from "./routes/auth";

export default (app) => {
    stateRouter(app);
    crudRouter(app);
    authRouter(app);

    return app;
}