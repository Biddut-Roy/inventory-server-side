const Product = require('../../../modal/Product')



const getAllProduct =   async (req, res) => {
    try {

        const result = await Product.find();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = getAllProduct ;