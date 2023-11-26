const Product = require('../../../modal/Product')



const getProduct =  async (req, res) => {
    const email = req.params?.email;
    const query = { user_email: email };
    const result = await Product.find(query)

    res.send(result);
}

module.exports = getProduct ;