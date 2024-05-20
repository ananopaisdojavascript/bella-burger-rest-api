"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeOrmProductRepository_1 = __importDefault(require("../../secondaryAdapter/typeOrmProductRepository"));
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const productService_service_1 = __importDefault(require("../../../core/services/productService.service"));
const router = express_1.default.Router();
const productRepository = new typeOrmProductRepository_1.default();
const productService = new productService_service_1.default(productRepository);
const productController = new product_controller_1.default(productService);
router.post('/products', productController.createProduct.bind(productController));
router.get('/products', productController.getProducts.bind(productController));
router.get('/products/:id', productController.getProduct.bind(productController));
exports.default = router;
