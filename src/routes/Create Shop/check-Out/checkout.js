const express = require("express");
const { getCheckOutData, updateCard, checkout, StorCountUpdate } = require("../../../api/Store Shop/checkout");
const verifyToken = require('../../../middelware/verifyToken')
const router = express.Router();



router.post('/checkOut-card',verifyToken,checkout)
router.get('/get-card',verifyToken,getCheckOutData)
router.patch('/update-card',verifyToken,updateCard)
router.patch('/update-card-item/:id',verifyToken,StorCountUpdate)

module.exports = router ;



