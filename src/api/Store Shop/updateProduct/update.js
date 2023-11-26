const Product = require("../../../modal/Product")


const update = async (req, res) => {

    const id = req.params?.id;
    const body = req.body;
    console.log(body);
    const query = { _id: id };

    const updateDoc = {
        $set: {
            shop_Name: body?.shop_Name,
            sellingPrice: body?.sellingPrice,
            cost: body?.cost,
            profit: body?.profit,
            discount: body?.discount,
            product_name: body?.product_name,
            location: body?.location,
            description: body?.description,
            photo: body?.photo,
            sellingPrice: body?.sellingPrice,
        }
    }

    const result = await Product.updateOne(query , updateDoc)

    res.send(result);
}

module.exports = update;