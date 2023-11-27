const express = require("express");
const PaymentUpdate = require("../../api/update-payment/paymentupdate");
const router = express.Router();


router.post("/payment-update",  PaymentUpdate )

module.exports = router ;