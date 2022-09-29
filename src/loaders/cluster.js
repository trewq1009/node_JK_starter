import cluster from "cluster";
import { cpus } from "os";
import process from "process";
import Logger from "./logger"


/**
 * 미완성
 * 클러스터 사용 중지 (22.09.28)
 */
export default async () => {
    Logger.info('Cluster Init...');
    
    // 임시: 클러스터 갯수 제한
    // const numCPUs = cpus().length;
    const numCPUs = 3;

    try {
        if(cluster.isPrimary) {
            Logger.info(`Primary ${process.pid} is running`);
    
            for(let i=0; i < numCPUs - 1; i++) {
                cluster.fork();
            };
        } else {
            Logger.info(`Worker ${process.pid} started`);
        }    
    } catch (error) {
        Logger.error(`Error: cluster , Message : ${error.message}`);
    }
}