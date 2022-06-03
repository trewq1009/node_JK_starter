import db from 'mysql';

let conn = db.createConnection({
    host     : process.env.DB_HOST || 'localhost',
    user     : process.env.DB_USER || 'root',
    password : process.env.DB_PASSWORD || '',
    database : process.env.DB_NAME || ''
  });

  conn.connect();

  module.exports = conn;