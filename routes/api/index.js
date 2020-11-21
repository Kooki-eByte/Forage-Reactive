const router = require("express").Router();
const foodMealRoutes = require("./apifood")
const mealRoutes = require("./meals");



// Meal routes
router.use("/meals", mealRoutes);

router.use("/getfoods", foodMealRoutes)

module.exports = router;