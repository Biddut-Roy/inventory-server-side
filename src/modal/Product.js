const { model, Schema } = require('mongoose');

const productSchema = new Schema({
 
    saleCount: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
       
    },
    user_email: {
        type: String,
       
    },
    shop_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Store', 
        required: true,
    },
    shop_Name: {
        type: String,
        required: true,
    },
    sellingPrice: {
        type: Number,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    profit: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    photo: {
        type: String,
    },
});

const Product = model('Product', productSchema);

module.exports = Product;
