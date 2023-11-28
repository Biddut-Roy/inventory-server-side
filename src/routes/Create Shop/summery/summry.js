const express = require("express");
const getSellData = require("../../../api/Store Shop/summry/summry");
const router = express.Router();



router.get("/sell-data/:email", getSellData )




module.exports = router ;