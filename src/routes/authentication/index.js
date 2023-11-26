const express = require("express");
const createAuthCookie = require("../../api/authentication/controler/TokenCreate");
const router = express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.post('/jwt' , createAuthCookie)

module.exports = router