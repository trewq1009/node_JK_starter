import {Container} from "typedi";
import Logger from "./logger";

export default (dbConnection) => {
    try {
        Container.set('db', dbConnection);
        Container.set('logger', Logger);


    } catch (e) {
        Logger.error('Injection Error');
        throw e;
    }
}
