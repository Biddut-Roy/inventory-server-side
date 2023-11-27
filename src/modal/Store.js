const { model, Schema } = require('mongoose');


const storeSchema = new Schema({
  limit: {
    type: Number,
    default: 3,
  },
  roll: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  email: {
    type: String,
    required: true,

  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  shop_name: {
    type: String,
    required: true,
  }
});


const Store = model('Store', storeSchema);

module.exports = Store;
