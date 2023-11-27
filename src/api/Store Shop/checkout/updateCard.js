const CheckOut = require('../../../modal/CheckOut');
const Product = require("../../../modal/Product")
const Store = require("../../../modal/Store")

const updateCard = async (req , res) =>{

    const body = req.body
    const email = req.query.email
    try {
        const updateQuery = {
            _id: {
              $in: body.mainId.map(id => id)
            }
          };

          const storeQuery = {email : email}

          const updateDocStore = {
            $set: {limit: 6}
          }
          const updateDocproCount = {
            $set: {saleCount: 3}
          }

          const updateQuantityByShop = await Store.updateOne(storeQuery , updateDocStore) 
        const updateStoreSell = await Product.updateOne(updateQuery ,updateDocproCount )
        const CheckOutDelete = await CheckOut.deleteMany({});

        res.send({updateQuantityByShop , updateStoreSell , CheckOutDelete })
    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).send('Internal Server Error');
    }

}

module.exports = updateCard ;