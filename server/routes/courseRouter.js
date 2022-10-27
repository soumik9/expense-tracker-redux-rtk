const express = require('express');
const router = express.Router();

const CourseController = require('../controllers/courseController');

const verifyLogin = require("../middleware/verifyLogin");
const verifyRole = require("../middleware/verifyRole");


router.get('/course', verifyLogin, verifyRole('admin', 'teacher', 'student'), CourseController.index);
router.post('/course', verifyLogin, verifyRole('admin', 'teacher'), CourseController.create);


module.exports = router; 