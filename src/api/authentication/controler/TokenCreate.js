const ganaratToken = require("../../../lib/Authentication/genaretor");




const createToken = async (req, res, next) => {
    try {
        const user = req.body
        ganaratToken(user)
    } catch (error) {
        next(error)
    }
}

module.exports = createToken