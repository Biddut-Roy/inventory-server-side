const Product = require('../../../modal/Product')



const getProduct =   async (req, res) => {

    try {
        const email = req.params?.email;
        const query = { user_email: email };
        const result = await Product.find(query);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = getProduct ;