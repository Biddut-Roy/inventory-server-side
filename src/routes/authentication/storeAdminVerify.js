const express = require("express");
const router = express.Router();
const verifyToken = require('../../middelware/verifyToken');
const storeAdmin = require("../../api/authentication/storeAdmin/storeAdmin");


router.get('/api/users/admin/:email',verifyToken,storeAdmin)


module.exports = router