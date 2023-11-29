const CheckOut = require('../../../modal/CheckOut');
const Product = require("../../../modal/Product")
const SellProduct = require('../../../modal/SellProduct')

const updateCard = async (req , res) =>{

    const body = req.body ;
    const email = req.query.email;
    try {
      const DeleteQuery = {email : email}

          const idCounts = {};
          body?.mainId.forEach(id => {
            idCounts[id] = (idCounts[id] || 0) + 1;
          });

          const updateSaleCount = async () => {
            for (const id in idCounts) {
                const count = idCounts[id];
                if (count > 1) {
                    await Product.updateOne({ _id: id }, { $inc: { saleCount: count } });
                }else{
                  await Product.updateOne({ _id: id }, { $inc: { saleCount: count } });
                }
            }
        };
        updateSaleCount()

        const CheckOutDelete = await CheckOut.deleteMany(DeleteQuery);
        const sellUpdate = await SellProduct.create(body);

        res.send(sellUpdate)

    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).send('Internal Server Error');
    }

}

module.exports = updateCard ;