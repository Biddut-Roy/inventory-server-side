
const Store = require('../../modal/Store')


const shop = async (req, res) => {
    
        const storeItem = req.body;
        console.log(storeItem);
        const result = await Store.create(storeItem);
        res.send(result);
}

module.exports = shop ;