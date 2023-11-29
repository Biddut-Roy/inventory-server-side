const express = require("express");
const { getCheckOutData, updateCard, checkout, StorCountUpdate } = require("../../../api/Store Shop/checkout");
const verifyToken = require('../../../middelware/verifyToken')
const verifyShopAdmin = require("../../../middelware/verifyShopAdmin")
const router = express.Router();



router.post('/checkOut-card',verifyToken,verifyShopAdmin,checkout)
router.get('/get-card',verifyToken,getCheckOutData)
router.patch('/update-card',verifyToken,verifyShopAdmin,updateCard)
router.patch('/update-card-item/:id',verifyToken,verifyShopAdmin,StorCountUpdate)

module.exports = router ;



