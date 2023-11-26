const express = require("express");
const { shop, getData } = require("../../api/Store Shop");
const router = express.Router();



router.post("/shop-admin", shop),

router.get("/shop-data/:email", getData)

module.exports = router ;

