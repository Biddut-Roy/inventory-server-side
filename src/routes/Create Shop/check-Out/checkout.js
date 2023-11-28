const express = require("express");
const { getCheckOutData, updateCard, checkout } = require("../../../api/Store Shop/checkout");

const router = express.Router();



router.post('/checkOut-card' , checkout)
router.get('/get-card' , getCheckOutData)
router.patch('/update-card' , updateCard)

module.exports = router ;

