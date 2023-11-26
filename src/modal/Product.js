const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    productId: {
        type: Number,
        unique: true,
      },
    saleCount: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
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

productSchema.pre('save', async function (next) {
    try {
      if (this.isNew) {
        const highestStore = await this.constructor.findOne().sort('-productId').exec();
  
        this.storeId = highestStore ? highestStore.storeId + 1 : 101010;
      }
  
      next();
    } catch (error) {
      next(error);
    }
  });

const Product = model('Product', productSchema);

module.exports = Product;
