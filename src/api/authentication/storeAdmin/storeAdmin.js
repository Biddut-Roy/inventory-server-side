const User = require('../../../modal/User')


const storeAdmin = async (req, res) => {
    const email = req.params?.email;

    // if (email !== req.decoded?.email) {
    //     return res.status(403).send({ message: " forbidden access" })
    // }

    const query = { email: email }
    const user = await User.findOne(query)
    let isStoreAdmin = false;
        if (user?._doc.roll === 'shop-admin') {
            isStoreAdmin = true
        }
 
    res.send({ isStoreAdmin })
}

module.exports = storeAdmin;