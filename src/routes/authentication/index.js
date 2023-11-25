const express = require("express");
const createAuthCookie = require("../../api/authentication/controler/TokenCreate");
const router = express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.post('/jwt' , createAuthCookie)

// router.post("/jwt" , async (req, res) => {
//     const user = req.body
//     console.log(user)
//     const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
//     res.send({ token })
//   } )


module.exports = router