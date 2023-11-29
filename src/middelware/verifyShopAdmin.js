const User = require('../modal/User')

const verifyShopAdmin = async (req, res, next) => {
    const email = req.decoded.email;
    const query = { email: email };
    const user = await User.findOne(query);
    const isStoreAdmin = user?._doc.roll === 'shop-admin';
    if (!isStoreAdmin) {
      return res.status(403).send({ message: 'forbidden access' });
    }
    next();
  }


  module.exports = verifyShopAdmin ;