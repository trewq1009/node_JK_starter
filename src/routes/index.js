import express from "express";

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        status : 'success',
        code : 200
    })
});

// serverState
router.get('/state/serverState', (req, res, next) => {
    res.json({
        status : "success",
        code : 200,
        message : "서버 연결 완료"
    })
});

export default router;