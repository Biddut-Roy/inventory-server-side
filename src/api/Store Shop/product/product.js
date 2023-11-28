const Product = require('../../../modal/Product')
const Store = require('../../../modal/Store')

const product = async (req, res) => {
    
    const storeProduct = req.body;
    const query = {email: storeProduct?.user_email}
    const updateDoc = {
        $set: {limit: storeProduct?.setLimit}
    }
    const storeP = {
        saleCount: storeProduct.saleCount,
        date: storeProduct.date,
        user_email: storeProduct.user_email,
        shop_Id: storeProduct.shop_Id,
        shop_Name: storeProduct.shop_Name,
        sellingPrice: storeProduct.sellingPrice,
        cost: storeProduct.cost,
        profit: storeProduct.profit,
        discount: storeProduct.discount,
        quantity: storeProduct.quantity,
        product_name: storeProduct.product_name,
        location: storeProduct.location,
        description: storeProduct.description,
        photo: storeProduct.photo,
    }
 

    let UpdateUserLimit = await Store.updateOne(query, updateDoc);
    const result = await Product.create(storeP);
    res.send(result);
}

module.exports = product ;