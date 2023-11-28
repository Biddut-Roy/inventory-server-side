const Store = require('../../../modal/Store')

const Product = require("../../../modal/Product");

const deleteItem = async (req, res) => {
    const id = req.params?.id;
    const count = req.query?.count
    const email = req.query?.email
    const limit = parseInt(count)
    try {
        const query = { email: email };
        const isExist = await Store.findOne(query)
        const updateDoc = {
            $set: {limit: isExist?.limit + limit}
        }
        let UpdateUserLimit = await Store.updateOne(query, updateDoc);
        const result = await Product.deleteOne({ _id: id });
        res.send(result)
    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = deleteItem;