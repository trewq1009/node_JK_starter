// import userModel from '../models/user';
import database from '../loaders/database';


/**
 * 유저 서비스 클래스
 * 비지니스 로직을 수행한다
 * DB 관련해서는 Model을 이용한다.
 */
export default class UserService {

    /**
     * 생성자
     * 임시 DB 로드
     * @constructor
     */
    constructor()
    {
        this.db;
    }

    /**
     * 유저 리스트
     * @returns array || null
     */
    findAll()
    {
        return new Promise (async (resolve, reject) => {
            this.db = await database();
        
            this.db.query('select * from tr_account',  (err, result, field) => {
                if(err) console.log(err);
                if(result) resolve(result);
            })
        })
    }

    /**
     * 특정 유저
     * @return array || null
     */
    findOne(no)
    {
        return new Promise (async (resolve, reject) => {
            this.db = await database();

            this.db.query(`select * from tr_account where ${no} limit 1`, (err, result, field) => {
                if(err) console.log(err);
                if(result) resolve(result);
            })
        })
    }
}