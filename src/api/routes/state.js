import express from "express";

const router = express.Router();

export default (app) => {
    app.use('/state', router);

    router.get('serverState', (req, res, next) => {
        return res.status(200).json({})
    })

}