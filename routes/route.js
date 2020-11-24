const router = require("express").Router()

const { authPerson } = require("../controllers/authController")

router.post("/", authPerson)

module.exports = router