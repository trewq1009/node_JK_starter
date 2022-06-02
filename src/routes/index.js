import express from "express";

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        status : 'success',
        code : 200
    })
});

// serverState
router.get('/serverState', (req, res, next) => {
    res.json({
        status : "success",
        code : 200
    })
});

export default router;