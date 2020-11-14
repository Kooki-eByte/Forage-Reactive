const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DinnerSchema = new Schema({
    name: String,
    img: String,
    ingredients: Text,
    servings: Number,
    calories: Number,
});

const Dinner = mongoose.model("Dinner", DinnerSchema);

module.exports = Dinner;