const express = require("express");
const { getProduct, product, getAllProduct } = require("../../../api/Store Shop/product");
const router = express.Router();


router.post('/add-product' , product)
router.get('/shop-products/:email' , getProduct)
router.get('/all-product' , getAllProduct)


module.exports = router ;

