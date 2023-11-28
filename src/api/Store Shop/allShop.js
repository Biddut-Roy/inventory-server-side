const Store = require('../../modal/Store')
const User = require('../../modal/User')


const allShop = async (req, res) => {

    const page = parseInt(req.query?.page);
    const size = parseInt(req.query?.size);
    const result = await Store.find()
    const pagination = await User.find().skip(page * size).limit(size);
    const dataLength = await User.estimatedDocumentCount()
    res.send({ result, dataLength , pagination });

}

module.exports = allShop;