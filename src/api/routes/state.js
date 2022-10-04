import express from "express";
import {Container} from "typedi";

const router = express.Router();

export default (app) => {
    app.use('/state', router);
    
    let logger = Container.get('logger');

    router.get('/serverState', (req, res, next) => {
        logger.info(`(get):/state/serverState`);
        return res.status(200).json({
            status : 'success',
            message : 'Server On'
        })
    });

}