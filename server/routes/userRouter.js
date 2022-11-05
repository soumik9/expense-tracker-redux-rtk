const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');
const verifyLogin = require("../middleware/verifyLogin");
const verifyRole = require("../middleware/verifyRole");

//routes
router.get('/users', verifyLogin, UserController.index);
router.patch('/user/:id', verifyLogin, UserController.update);


module.exports = router;