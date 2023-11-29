const Product = require("../../../modal/Product")


const StorCountUpdate = async ( req ,res) =>{
    const Id = req.params.id
    const query = {_id: Id}
    const result = await Product.updateOne(query , {$inc: { quantity: - 1}});
    res.send(result);
}
module.exports = StorCountUpdate ;