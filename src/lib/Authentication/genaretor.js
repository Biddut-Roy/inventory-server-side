const jwt = require("jsonwebtoken");
require("dotenv").config();

const ganaratToken = (body)=> {
    return jwt.sign(body, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
}

module.exports = ganaratToken