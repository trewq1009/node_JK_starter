import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";
const moment = require('moment');


export let Logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        // winston.format.prettyPrint(),
        // winston.format.cli(),
        winston.format.simple(),
        winston.format.splat(),  // String interpolation splat for %d %s-style messages.
        winston.format.json(),
        winston.format.printf((log) => `${moment().format('YYYY-MM-DD HH:mm:ss.SSS')},[${log.level.toUpperCase()}][Message]-${log.message}`)
    ),
    transports: [
        new winston.transports.Console(),   // console 창에 내역 띄우기
        new (winstonDaily)({
            filename: 'logs/log-api-%DATE%.log',
            // datePattern: 'YYYY-MM-DD-HH-mm',
            datePattern: 'YYYYMMDD',
            zippedArchive: false,
            createSymlink: true,
            level: 'info',
            symlinkName: 'api.log',
            maxSize: 50000000,
            maxFiles: 40,
        })
    ],
});

export let AccessLog = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        // winston.format.prettyPrint(),
        // winston.format.cli(),
        winston.format.simple(),
        winston.format.splat(),  // String interpolation splat for %d %s-style messages.
        winston.format.json(),
        winston.format.printf((log) => `${moment().format('YYYY-MM-DD HH:mm:ss.SSS')},[${log.level.toUpperCase()}][Message]-${log.message}`)
    ),
    transports: [
        // new winston.transports.Console(),
        new (winstonDaily)({
            filename: 'logs/log-api-access-%DATE%.log',
            // datePattern: 'YYYY-MM-DD-HH-mm',
            datePattern: 'YYYYMMDD',
            zippedArchive: false,
            createSymlink: true,
            level: 'debug',
            symlinkName: 'access.log',
            maxSize: 50000000,
            maxFiles: 30,
        })
    ],
});