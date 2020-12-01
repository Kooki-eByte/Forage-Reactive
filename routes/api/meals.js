const router = require("express").Router();
const mealsController = require("../../controllers/mealController");

// Matches with "/api/meals"
router.route("/").get(mealsController.findAll).post(mealsController.create);

router.route("/:type").get(mealsController.findByType);

// Matches with "/api/meals/:id"
router
  .route("/:id")
  .get(mealsController.findById)
  .delete(mealsController.remove);

module.exports = router;
