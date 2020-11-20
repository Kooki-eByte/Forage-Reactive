const router = require("express").Router()
const apiController = require("../../controllers/apiController")

router
    .route("/:diet/:food")
    .get(apiController.findAPIFood)

module.exports = router;