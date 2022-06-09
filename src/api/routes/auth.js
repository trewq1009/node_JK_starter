import { Router, Request, Response, NextFunction } from 'express';
import middleware from "../middlewares";
import userService from "../../services/user";

const router = Router();

export default (app) => {
    app.use('/api/auth', router);

    router.get('/', middleware.testMiddleware, async (req, res) => {

        const userServiceInstance = new userService;
        const resultData = await userServiceInstance.getData();

        return res.status(200).json({
            status: 'success',
            message: 'Test Auth Get Method URL = /',
            data: resultData
        });
    })
}