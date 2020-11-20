const router = require("express").Router();
const bookRoutes = require("./meals");
const foodMealRoutes = require("./apifood")

// Meal routes
router.use("/meals", bookRoutes);

router.use("/getfoods", foodMealRoutes)

module.exports = router;