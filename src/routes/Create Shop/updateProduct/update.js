const express = require("express");
const { deleteItem, update, getUpdateProduct } = require("../../../api/Store Shop/updateProduct");
const router = express.Router();
const verifyToken = require('../../../middelware/verifyToken')


router.get('/dashboard/updateProduct/:id',verifyToken,getUpdateProduct)
router.patch('/update-product/:id',verifyToken,update)
router.delete(`/delete-product/:id`,verifyToken,deleteItem)

module.exports = router ;