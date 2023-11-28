const Store = require("../../modal/Store")
const User = require('../../modal/User')


const PaymentUpdate = async (req, res) => {
    const body = req.body;
    console.log(body);

    try {

        const query = { email: body.Admin }

        let adminIncome = await User.findOne(query);

        const r = adminIncome.income;

        const totalIncome = r + body.price;

        const storeQuery = { email: body.email }

        const updateDocStore = {
            $set: { limit: body.limit }
        }

        const updateAdminIncome = {
            $set: { income: totalIncome }
        }
        
        const updateQuantityByShop = await Store.updateOne(storeQuery, updateDocStore)

        let adminUpdate = await User.updateOne(query, updateAdminIncome);

        res.send( adminUpdate)

    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).send('Internal Server Error');
    }

}

module.exports = PaymentUpdate;