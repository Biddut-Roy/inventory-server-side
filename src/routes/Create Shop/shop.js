const express = require("express");
const { shop, getData, allShop } = require("../../api/Store Shop");
const router = express.Router();
const verifyToken = require("../../middelware/verifyToken")



router.post("/shop-admin",verifyToken,shop),

router.get("/shop-data/:email",verifyToken,getData)

router.get("/all-shop-data",verifyToken,allShop)

module.exports = router ;

