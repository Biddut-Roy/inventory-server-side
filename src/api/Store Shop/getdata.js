
const Store = require('../../modal/Store')


const getData =  async (req, res) => {
    
    const email = req.params?.email;
    const query = { email: email };
    const result = await Store.findOne(query)

    res.send(result);
}

module.exports = getData ;