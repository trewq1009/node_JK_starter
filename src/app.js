import config from "./config/index";
import loaders from "./loaders";
import express from "express";
import {Logger} from "./loaders/logger";


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
    Logger.info(`Server Start!!!!!`);
    Logger.info(`Server Port =====> ${config.APP_PORT}`);
  });
}
serverStart();