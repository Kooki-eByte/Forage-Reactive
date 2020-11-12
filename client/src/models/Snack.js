const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SnackSchema = new Schema({
    name: String,
    img: String,
    ingredients: Text,
    servings: Number,
    calories: Number,
});

const Snack = mongoose.model("Snack", SnackSchema);

module.exports = Snack;