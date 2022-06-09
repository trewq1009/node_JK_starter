import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import indexRouter from "../api/index";

export default async (app) => {
    // *********** Express 미들웨어 설정 ***********
     
    // request에 대한 로그를 기록하는 미들웨어
    app.use(logger("dev"));

    // 정적 파일들을 접근할 수 있도록하는 미들웨어
    app.use(express.static(path.join(__dirname, "public")));

    // request의 본문을 분석해주는 미들웨어
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // request의 쿠키를 해석해주는 미들웨어
    app.use(cookieParser(process.env.COOKIE_SECRET));

    // cors 허용
    app.use(cors());
    
    // cors 특정 도메인이 있을경우
    // let corsOptions = {
    //     origin: 'https://www.domain.com',
    //     credentials: true
    // }
    // app.use(cors(corsOptions));

    // ********************* End *********************


    // **************** Router Section ****************
    await indexRouter(app);
    


    // 404에러를 찾고 error handler로 인계하는 미들웨어
    app.use((req, res, next) => {
        const err = new Error("Not Found");
        err.status = 404;
        next(err);
    });

    // error handler
    app.use((err, req, res, next) => {
        res.json({
            status : 'error',
            message : err
        });
    });

    // ********************* End *********************
    return app;
}