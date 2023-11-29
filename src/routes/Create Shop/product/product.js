const express = require("express");
const { getProduct, product, getAllProduct, getSearchProduct } = require("../../../api/Store Shop/product");
const router = express.Router();
const verifyToken = require('../../../middelware/verifyToken')
const verifyAdmin = require("../../../middelware/VerifyAdmin")
const verifyShopAdmin = require("../../../middelware/verifyShopAdmin")



router.post('/add-product',verifyToken,verifyShopAdmin,product)
router.get('/shop-products/:email',verifyToken,verifyShopAdmin,getProduct)
router.get('/all-product',verifyToken,verifyAdmin,getAllProduct)

router.get('/shop-product/:email',verifyToken,verifyShopAdmin,getSearchProduct)

module.exports = router ;

