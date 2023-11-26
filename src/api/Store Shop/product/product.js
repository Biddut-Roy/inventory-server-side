const Product = require('../../../modal/Product')


const product = async (req, res) => {
    
    const storeProduct = req.body;
    const result = await Product.create(storeProduct);
    res.send(result);
}

module.exports = product ;