const express = require("express");
const getSellData = require("../../../api/Store Shop/summry/summry");
const router = express.Router();
const verifyToken = require('../../../middelware/verifyToken')
const verifyShopAdmin = require("../../../middelware/verifyShopAdmin")


router.get("/sell-data/:email",verifyToken,verifyShopAdmin,getSellData )




module.exports = router ;