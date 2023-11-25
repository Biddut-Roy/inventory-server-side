const createToken = require('../../../lib/Authentication/genaretor')




const createAuthCookie = async (req, res) => {

        const user = req.body;
        console.log(user)
        const token = createToken(user)
        res.send({ token })
}

module.exports = createAuthCookie