const express = require('express');
const router = express.Router();
const User = require('../models/');
const passport = require('../passport/');

const authController = require('../controllers/authController');

router.get('/', authController.getCurrentUser);
router.post('/signUpPage', authController.checkAlreadyRegistered, authController.registerUser, passport.authenticate('local'), authController.login);
router.post('/loginPage', passport.authenticate('local'), authController.login);
router.post('/logout', authController.logout);

module.exports = router;