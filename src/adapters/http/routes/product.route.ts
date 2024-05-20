import express from 'express';
import TypeOrmProductsRepositoryPort from '../../secondaryAdapter/typeOrmProductRepository';
import ProductController from '../controllers/product.controller';
import ProductService from '../../../core/services/productService.service';

const router = express.Router()
const productRepository = new TypeOrmProductsRepositoryPort()
const productService = new ProductService(productRepository)
const productController = new ProductController(productService)

router.post('/products', productController.createProduct.bind(productController))
router.get('/products', productController.getProducts.bind(productController))

export default router;