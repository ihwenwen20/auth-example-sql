const express = require('express');
const router = express.Router();
const authController = require('./controller');
const { authenticate } = require('../../../middleware/verification');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authenticate, authController.logout);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:token', authController.resetPassword);
router.get('/me', authenticate, authController.getMe);

module.exports = router;