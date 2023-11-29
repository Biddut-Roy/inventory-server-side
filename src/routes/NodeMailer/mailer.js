const express = require("express");
const mailer = require("../../api/mailer_controler/mailer");
const router = express.Router();

router.post("/send-mail", mailer ),

module.exports = router ;
