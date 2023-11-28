const Store = require('../../modal/Store')


const allShop =  async (req, res) => {

    const result = await Store.find()

    res.send(result);
}

module.exports = allShop ;