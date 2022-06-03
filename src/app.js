import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

require("dotenv").config();

import indexRouter from "./routes/index";
import authRouter from "./routes/auth";

const app = express();

app.set("port", process.env.APP_PORT || 3000);

// express의 미들웨어 설정
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


// Router 영역
// ********************************************************
// index 라우터
app.use("/", indexRouter);

// 계정 관련 라우터
app.use("/api/auth", authRouter);



// ********************************************************




// 404에러를 찾고 error handler로 인계하는 미들웨어
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

// error handler
app.use((err, req, res, next) => {
    res.json({
        success: 'fail',
    });
  });

// 서버 설정
const server = app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기중입니다.");
});

export default app;