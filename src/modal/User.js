const { model, Schema } = require("mongoose");

const UsersSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

    income: {
        type: Number,
    },
    shop_name: {
        type: String,
    },
    roll: {
        type: String,
    },
})

const Users = model("Users", UsersSchema)

module.exports = Users

