const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BreakfastSchema = new Schema({
    name: String,
    img: String,
    ingredients: Text,
    servings: Number,
    calories: Number,
});

const Breakfast = mongoose.model("Breakfast", BreakfastSchema);

module.exports = Breakfast;