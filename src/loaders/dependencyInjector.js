import {Container} from "typedi";
import {Logger} from "./logger";

export default (dbConnection) => {
    try {
        Container.set('db', dbConnection);
        Container.set('logger', Logger);


    } catch (e) {
        Logger.info('Injection Error....');
        Logger.debug(`Injection Error Message : ${e.message}`);
        throw e;
    }
}
