const express = require("express");
const { shop, getData, allShop } = require("../../api/Store Shop");
const router = express.Router();
const verifyToken = require("../../middelware/verifyToken")
const verifyAdmin = require("../../middelware/VerifyAdmin")
const verifyShopAdmin  = require("../../middelware/verifyShopAdmin")


router.post("/shop-admin",verifyToken,shop),

router.get("/shop-data/:email",verifyToken,verifyShopAdmin,getData)

router.get("/all-shop-data",verifyToken,verifyAdmin,allShop)

module.exports = router ;

