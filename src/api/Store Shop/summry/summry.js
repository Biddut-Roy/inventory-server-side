const SellProduct = require('../../../modal/SellProduct')


const getSellData = async(req, res) => {
    try {
        const email = req.params?.email;
        const page = parseInt(req.query?.page);
        const size= parseInt(req.query?.size);
        const query = {email: email };

        const result = await SellProduct.find(query).sort({ date: 'desc' }).skip(page * size).limit(size);
        const dataLength = await SellProduct.estimatedDocumentCount()
        res.send({result , dataLength});
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = getSellData ;