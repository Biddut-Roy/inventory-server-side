const { model, Schema } = require('mongoose');

const SellProductSchema = new Schema({
  mainId: {
    type: [String], 
  },
  email: {
    type: String,
    required: true,
  },
  pay: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
},
  date: {
    type: Date,
    default: Date.now,
  },
});

const SellProduct = model('SellProduct', SellProductSchema);

module.exports = SellProduct;
