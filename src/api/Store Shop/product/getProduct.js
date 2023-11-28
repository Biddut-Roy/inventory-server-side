const Product = require('../../../modal/Product')
const mongoose = require('mongoose');


const getProduct =   async (req, res) => {
    try {
        const email = req.params?.email;
        const query = { user_email: email };

        let result = await Product.find(query);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = getProduct ;