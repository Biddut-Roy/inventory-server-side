

const Product = require("../../../modal/Product");

const deleteItem = async (req, res) => {
    const id = req.params?.id;

    try {
        const result = await Product.deleteOne({ _id: id });
        res.send(result)
    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = deleteItem;