
const Product = require("../../../modal/Product")

const getUpdateProduct = async (req, res) => {
    
    const id = req.params?.id;
    const query = { _id:id};
    const fieldsToRetrieve = ['photo' ,'quantity' ,'location' , 'profit' , 'cost' , 'description' , 'discount' , 'product_name'];
    const result = await Product.findOne(query).select(fieldsToRetrieve.join(' '))

    res.send(result);
}


module.exports = getUpdateProduct ;