const { model, Schema } = require('mongoose');


const checkoutSchema = new Schema({
    mainId: {
        type: Schema.Types.ObjectId,
        ref: 'Product', 
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    sellingPrice: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const Checkout = model('Checkout', checkoutSchema);

module.exports = Checkout;
