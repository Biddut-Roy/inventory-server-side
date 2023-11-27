const Checkout = require('../../../modal/CheckOut')


const checkout = async ( req ,res) =>{
    const mainId = req.body
    const result = await Checkout.create(mainId);
    res.send(result);
}


module.exports = checkout ;