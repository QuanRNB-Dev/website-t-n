
const db = require('../config/db');

// Lấy danh sách món ăn
async function getAllProducts() {
    const [rows] = await db.query(
        'SELECT * FROM products'
    );

    return rows;
}

module.exports = { getAllProducts };
