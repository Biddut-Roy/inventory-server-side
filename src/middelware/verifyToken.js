require("dotenv").config();
const jwt = require("jsonwebtoken");



const verifyToken = (req, res, next) => {
  
    try {
      if (!req.headers.authorization) {
        return res.status(401).send({ message: " unauthorize access" })
      }
      const token = req.headers.authorization.split(' ')[1];
   
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
        if (err) {
          return res.status(401).send({ message: " unauthorize access" })
        }
        req.decoded = decoded;
        next();
      });
     
    } catch (error) {
     
    }
    
  }

module.exports = verifyToken