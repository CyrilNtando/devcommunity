const express = require('express');
const userController = require('../controller/userController');
const authController = require('../controller/authController');
const router = express.Router();

/*/api/v1/users**/
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/me', authController.protect, userController.getCurrentUser);

module.exports = router;
