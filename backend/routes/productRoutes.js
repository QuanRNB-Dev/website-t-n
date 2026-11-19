
const express = require('express');
const router = express.Router();

const { getAllProducts } = require('../models/productModel');

router.get('/', async (req, res) => {
    try {
        const products = await getAllProducts();

        res.json(products);

    } catch (error) {
        res.status(500).json({
            message: 'Lỗi lấy danh sách món ăn'
        });
    }
});

module.exports = router;
