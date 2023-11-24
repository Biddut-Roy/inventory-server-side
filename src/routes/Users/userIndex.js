const express = require("express");
const { usersData } = require("../../api/Users");
const router = express.Router();


router.post("/users",  usersData )

module.exports = router ;