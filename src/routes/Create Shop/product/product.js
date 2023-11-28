const express = require("express");
const { getProduct, product } = require("../../../api/Store Shop/product");
const router = express.Router();


router.post('/add-product' , product)
router.get('/shop-products/:email' , getProduct)


module.exports = router ;

