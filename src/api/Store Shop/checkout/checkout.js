const Checkout = require('../../../modal/CheckOut')


const checkout = async ( req ,res) =>{
    const mainId = req.body
    console.log(mainId);
    const result = await Checkout.create(mainId);
    res.send(result);
}


module.exports = checkout ;