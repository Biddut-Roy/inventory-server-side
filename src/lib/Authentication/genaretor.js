const jwt = require('jsonwebtoken')
require('dotenv').config()

const ganaratToken = (user)=> {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
}

module.exports = ganaratToken