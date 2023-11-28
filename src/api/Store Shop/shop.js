const Users = require("../../modal/User");
const Store = require('../../modal/Store')


const shop = async (req, res) => {

        const storeItem = req.body;

        const query = { email: storeItem.email };
        const isExist = await Store.findOne(query)

        const updateQuery = {email: storeItem?.email}
        const updateDoc ={
                $set: {
                        roll:storeItem?.roll ,
                        shop_name: storeItem?.shop_name
                }
        }
        const updateUser = await Users.updateOne(updateQuery , updateDoc )

        if (!isExist) {
                const result = await Store.create(storeItem);
                res.send(result);  
        }else{
                res.send({ store: "already have e store" })
        }
}

module.exports = shop;