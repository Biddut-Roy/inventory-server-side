const express = require("express");
const getSellData = require("../../../api/Store Shop/summry/summry");
const router = express.Router();
const verifyToken = require('../../../middelware/verifyToken')


router.get("/sell-data/:email",verifyToken,getSellData )




module.exports = router ;