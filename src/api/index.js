import crudRouter from "./routes/crud";
import authRouter from "./routes/auth";

export default (app) => {

    crudRouter(app);
    authRouter(app);

    return app;
}



// const router = express.Router();
// router.get('/auth', (req, res, next) => {
//     const testData = req.body;
//     return res.json({
//         message : 'test',
//         data : testData
//     })
// })
// router.get('/auth', authRouter)
// export default router;



// export default () => {
//     console.log(1);
//     const route = express.Router();
//     // authRouter(app);
//     route.get('/auth', (req, res, next) => {
//         return res.json({message : 'test'})
//     })

//     return route;
// }



// const router = express.Router();
// serverState
// router.get('/state/serverState', (req, res, next) => {
//     res.json({
//         status : "success",
//         code : 200,
//         message : "서버 연결 완료"
//     })
// });
// router.get('/test/middleware',middleware.testMiddleware, (req, res, next) => {
//     res.status(200).json({
//         status : 'test',
//         code : 200,
//         message : "testing"
//     })
// })
// export default router;