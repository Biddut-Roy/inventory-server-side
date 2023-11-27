const express = require("express");
const checkout = require("../../../api/Store Shop/checkout/checkout");
const getCheckOutData = require("../../../api/Store Shop/checkout/getCheckOutData");
const router = express.Router();



router.post('/checkOut-card' , checkout)
router.get('/get-card' , getCheckOutData)

module.exports = router ;

