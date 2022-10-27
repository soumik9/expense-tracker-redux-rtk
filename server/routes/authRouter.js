const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/authController');
const verifyLogin = require("../middleware/verifyLogin");

//routes
router.get('/profile', verifyLogin, AuthController.profile);
router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);



module.exports = router;