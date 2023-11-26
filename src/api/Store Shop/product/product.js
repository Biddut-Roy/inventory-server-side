const Product = require('../../../modal/Product')


const product = async (req, res) => {
    
    const storeProduct = req.body;
    console.log(storeProduct);
    const result = await Product.create(storeProduct);
    res.send(result);
}

module.exports = product ;