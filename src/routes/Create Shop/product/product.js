const express = require("express");
const { getProduct, product, getAllProduct } = require("../../../api/Store Shop/product");
const router = express.Router();
const verifyToken = require('../../../middelware/verifyToken')

router.post('/add-product',verifyToken,product)
router.get('/shop-products/:email',verifyToken,getProduct)
router.get('/all-product',getAllProduct)


module.exports = router ;

