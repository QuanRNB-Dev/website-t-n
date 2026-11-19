const db = require('./config/db');

db.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
        console.log('Truy vấn thất bại:', err.message);
    } else {
        console.log('Kết quả:', results[0].result);
    }

    db.end();
});