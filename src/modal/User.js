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
})

const Users = model("Users", UsersSchema)

module.exports = Users

