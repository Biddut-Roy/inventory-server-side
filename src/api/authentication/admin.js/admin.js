const User = require('../../../modal/User')


const admin = async (req, res) => {
    const email = req.params?.email;

    if (email !== req.decoded?.email) {
        return res.status(403).send({ message: " forbidden access" })
    }

    const query = { email: email }
    const user = await User.findOne(query)
    let isAdmin = false;
        if (user?._doc.roll === 'admin') {
            isAdmin = true
        }
 
    res.send({ isAdmin })
}

module.exports = admin;