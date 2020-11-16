const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MealSchema = new Schema({
    type: String,
    name: String,
    img: String,
    ingredients: Text,
    servings: Number,
    calories: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User'}
});

const Meal = mongoose.model("Meal", MealSchema);

module.exports = Meal;