const express = require("express");
const getUpdateProduct = require("../../../api/Store Shop/updateProduct/getUpdate");
const update = require("../../../api/Store Shop/updateProduct/update");
const router = express.Router();



router.get('/dashboard/updateProduct/:id' , getUpdateProduct)
router.patch('/update-product/:id' , update)

module.exports = router ;