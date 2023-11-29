const express = require("express");
const { shop, getData, allShop } = require("../../api/Store Shop");
const router = express.Router();
const verifyToken = require("../../middelware/verifyToken")



router.post("/shop-admin", shop),

router.get("/shop-data/:email", getData)

router.get("/all-shop-data", allShop)

module.exports = router ;

