const express = require('express')
const passport = require("../config/passport");
const router = express.Router()
const authController = require('../controllers/authController')


router.post('/signup', authController.signUpUser)
router.post('/login', passport.authenticate("local"), authController.logInUser)
router.get('/logout', authController.logOutUser)
router.get('/auth', authController.checkAuth)

module.exports = router