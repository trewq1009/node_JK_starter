import config from "./config/index";
import loaders from "./loaders";
import express from "express";

async function serverStart () 
{
  const app = express();

  /**
   * 미들웨어, DB, 등등 로드
   */
  await loaders(app);

  /**
   * 서버 설정
   */
  app.listen(config.APP_PORT, () => {
    console.debug(config.APP_PORT, " => Port Number");
  });
}
serverStart();