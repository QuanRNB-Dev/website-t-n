const path = require('path');

require('dotenv').config({
    path: path.join(__dirname, '../.env')
});

const mysql = require('mysql2');

console.log('Kiểm tra ENV:', {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    passwordExists: !!process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT)
});

db.connect((err) => {
    if (err) {
        console.log('Kết nối thất bại:', err.message);
        return;
    }

    console.log('Kết nối MySQL thành công!');
});

module.exports = db;