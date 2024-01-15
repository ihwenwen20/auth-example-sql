const express = require('express');
const router = express.Router();
const productController = require('./controller');
const { authenticate } = require('../../../middleware/verification');

router.get('/products', productController.getAllProducts);
router.get('/products/infinite', productController.getAllProductsInfinite);
router.get('/products/:id', productController.getProductById);
router.post('/products', authenticate, productController.createProduct);
router.put('/products/:id', authenticate, productController.updateProduct);
router.delete('/products/:id', authenticate, productController.deleteProduct);
router.post('/delete-multiple', authenticate, productController.deleteMultipleProducts);

module.exports = router;