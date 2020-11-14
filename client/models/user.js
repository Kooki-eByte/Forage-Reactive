const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Enter an Email to create an account."]

    },
    password: {
        type: String,
        required: [true, "Enter a Password."]
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;