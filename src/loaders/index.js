import expressLoader from "./express";
import databaseLoader from "./database";
import dependencyLoader from "./dependencyInjector";
import {Logger} from "./logger";

export default async (app) => {
    /*
        cluster 는 node 초기에 CPU 코어당 여러가지 프로세스를 생성하기 위해 사용되었으나
        이 방식은 코드 관리에 있어서 더 어렵게 만들게 되어 사용을 하지 않는다 (22.09.29)
    */
    // Cluster connection
    // import clusterLoader from "./cluster";
    // await clusterLoader();

    // Database connection
    const dbConnection = await databaseLoader();
    Logger.info('DataBase Intialized');

    // Dependency injection
    await dependencyLoader(dbConnection);
    Logger.info('Dependency Injector loaded');


    // application express load
    await expressLoader(app);
    Logger.info('Express Intialized');
}