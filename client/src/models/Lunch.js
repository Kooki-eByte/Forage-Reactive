const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LunchSchema = new Schema({
    name: String,
    img: String,
    ingredients: Text,
    servings: Number,
    calories: Number,
});

const Lunch = mongoose.model("Lunch", LunchSchema);

module.exports = Lunch;