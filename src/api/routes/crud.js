import express from "express";
import middleware from "../middlewares/index";
import userService from "../../services/user";


/**
 * CRUD 보여주기용 라우터
 */
const router = express.Router();

export default (app) => {
    app.use('/api/crud', router);

    /**
     * 전체 리스트 & 모든 정보 불러오기
     */
    router.get('/', async (req, res, next) => {

        const userServiceInstance = new userService;
        const list = await userServiceInstance.findAll();

        return res.status(200).json({
            status : 'success',
            message : 'CRUD Test : Get Method => /',
            data : list
        })
    })

    /**
     * 특정 데이터 조회
     */
    router.get('/:no', middleware.testMiddleware, (req, res, next) => {
        const {no} = req.params;

        return res.status(200).json({
            status : 'success',
            message : 'CRUD Test : Get Method => /:no',
            params : no
        })
    })

    /**
     * 특정 데이터 저장 & 변경도 가능
     */
    router.post('/:no', (req, res, next) => {
        const no = req.params;
        const inputData = req.body;

        return res.status(200).json({
            status : 'success',
            message : 'CRUD Test : Post Method => /:no',
            params : no,
            body : inputData
        })
    })

    /**
     * put, patch, delete 등등 존재한다.
     * 기본적인 CRUD 이다.
     */

}