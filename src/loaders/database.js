import db from "mysql";
import config from "../config/index";

export default async () => {
    let connection = db.createConnection({
        host     : config.DB_HOST,
        user     : config.DB_USER,
        password : config.DB_PASSWORD,
        database : config.DB_NAME,
        port     : config.DB_PORT
      });
    connection.connect(err => {
      if(err) console.log('DB 연결 에러 : ' + err);
    });
    return connection
}