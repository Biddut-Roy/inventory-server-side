const express = require("express");
const checkout = require("../../../api/Store Shop/checkout/checkout");
const getCheckOutData = require("../../../api/Store Shop/checkout/getCheckOutData");
const updateCard = require("../../../api/Store Shop/checkout/updateCard");
const router = express.Router();



router.post('/checkOut-card' , checkout)
router.get('/get-card' , getCheckOutData)
router.patch('/update-card' , updateCard)

module.exports = router ;

