require("dotenv").config();
const jwt = require("jsonwebtoken");



const verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(401).send({ message: " unauthorize access" })
    }
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.USER_SECRET_KEY, function (err, decoded) {
      if (err) {
        return res.status(401).send({ message: " unauthorize access" })
      }
      req.decoded = decoded;
    });
    next();
  }

module.exports = verifyToken