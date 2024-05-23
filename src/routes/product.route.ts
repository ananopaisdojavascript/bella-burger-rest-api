import express from 'express';
import ProductController from '../controllers/product.controller';

const router = express.Router()

router.get('/products', ProductController.getProducts)
router.get('/products/:id', ProductController.getProduct)
router.post('/products', ProductController.createProduct)

export default router;