import db from "mysql";

const test = ((req, res) => {

    try {
        const conn = db.createConnection({
            host     : process.env.DB_HOST || 'localhost',
            user     : process.env.DB_USER || 'admin',
            password : process.env.DB_PASSWORD || '',
            database : process.env.DB_NAME || 'training',
            port     : process.env.DB_PORT || 33066
        })

        conn.connect();

        conn.query('SELECT * FROM tr_account', function(err, rows, fields) {
            if (err) throw err;
            console.log('The solution is: ', rows[0].solution);
            console.log('total row : ', rows)
        });
          
        conn.end();

        return res.status(200).json({
            status : 'success',
            message : '테스트 입니다.'
        })

    } catch (error) {
        return res.status(200).json({
            status : 'fail',
            message : error.message
        })
    }
})

export default {test};