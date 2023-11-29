const express = require("express");
const { review } = require("../../api/Testimonial");

const router = express.Router();


router.get("/review",review )

module.exports = router ;