const { model, Schema } = require('mongoose');


const storeSchema = new Schema({
  storeId: {
    type: Number,
    unique: true,
  },
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
    unique: true,
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
   
  },
});

storeSchema.pre('save', async function (next) {
  try {
    if (this.isNew) {
      const highestStore = await this.constructor.findOne().sort('-storeId').exec();

      this.storeId = highestStore ? highestStore.storeId + 1 : 1000;
    }

    next();
  } catch (error) {
    next(error);
  }
});

const Store = model('Store', storeSchema);

module.exports = Store;
