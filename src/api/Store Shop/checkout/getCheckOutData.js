const Checkout = require('../../../modal/CheckOut')


const getCheckOutData = async ( req ,res) =>{

    const result = await Checkout.find();
    res.send(result);
}


module.exports = getCheckOutData ;
