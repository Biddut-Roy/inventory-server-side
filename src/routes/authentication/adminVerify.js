const express = require("express");
const router = express.Router();
const admin = require("../../api/authentication/admin.js/admin");
const verifyToken = require('../../middelware/verifyToken')


router.get('/api/users/admin/:email',verifyToken, admin)


module.exports = router