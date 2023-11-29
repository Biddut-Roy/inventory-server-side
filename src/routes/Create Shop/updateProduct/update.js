const express = require("express");
const { deleteItem, update, getUpdateProduct } = require("../../../api/Store Shop/updateProduct");
const router = express.Router();
const verifyToken = require('../../../middelware/verifyToken')
const verifyShopAdmin = require("../../../middelware/verifyShopAdmin")


router.get('/dashboard/updateProduct/:id',verifyToken,verifyShopAdmin,getUpdateProduct)
router.patch('/update-product/:id',verifyToken,verifyShopAdmin,update)
router.delete(`/delete-product/:id`,verifyToken,verifyShopAdmin,deleteItem)

module.exports = router;