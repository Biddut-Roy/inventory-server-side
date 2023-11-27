const { model, Schema } = require('mongoose');


const checkoutSchema = new Schema({
    mainId: {
        type: Schema.Types.ObjectId,
        ref: 'Product', 
        required: true,
    },
});

const Checkout = model('Checkout', checkoutSchema);

module.exports = Checkout;
