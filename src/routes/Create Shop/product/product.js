const express = require("express");
const product = require("../../../api/Store Shop/product/product");

const router = express.Router();


router.post('/add-product' , product)

module.exports = router ;

