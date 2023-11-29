const express = require("express");
const PaymentUpdate = require("../../api/update-payment/paymentupdate");
const router = express.Router();
const verifyToken = require('../../middelware/verifyToken')

router.post("/payment-update",verifyToken,PaymentUpdate )

module.exports = router ;