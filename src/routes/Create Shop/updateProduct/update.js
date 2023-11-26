const express = require("express");
const { deleteItem, update, getUpdateProduct } = require("../../../api/Store Shop/updateProduct");
const router = express.Router();



router.get('/dashboard/updateProduct/:id' , getUpdateProduct)
router.patch('/update-product/:id' , update)
router.delete(`/delete-product/:id` , deleteItem)

module.exports = router ;