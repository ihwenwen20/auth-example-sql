const express = require('express');
const router = express.Router();
const userController = require('./controller');
const { isAdmin, authenticate } = require('../../../middleware/verification');

router.get('/users', authenticate, isAdmin, userController.getAllUsers);
router.get('/users/:id', authenticate, isAdmin, userController.getUserById);
router.post('/users', authenticate, isAdmin, userController.createUser);
router.put('/users/:id', authenticate, isAdmin, userController.updateUser);
router.delete('/users/:id', authenticate, isAdmin, userController.deleteUser);

router.put('/change-status/:id', authenticate,  userController.changeStatusUser);

module.exports = router;

