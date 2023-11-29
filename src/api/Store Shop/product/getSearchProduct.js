const Product = require('../../../modal/Product')

const getSearchProduct = async (req, res) => {

    try {
        const email = req.params?.email;
        const query = { user_email: email };

        const filter = req.query;
        const search = {};

        if (filter.search) {
            search._id = filter.search;
          }
    

        const finalQuery = { ...query, ...search };
    
        const result = await Product.find(finalQuery);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = getSearchProduct;