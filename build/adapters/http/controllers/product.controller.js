"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    getProducts(_request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productService.getProducts();
            if (!products) {
                return response.status(404).json({
                    message: "Nenhum produto encontrado"
                });
            }
            return response.status(200).json(products);
        });
    }
    getProduct(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { product_id } = request.params;
            const product = yield this.productService.getProduct(parseInt(product_id));
            if (!product) {
                return response.status(404).json({
                    message: "Nenhum produto encontrado"
                });
            }
            return response.status(200).json(product);
        });
    }
    createProduct(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, image_url, category } = request.body;
            const product = yield this.productService.createProduct({
                name: name,
                price: price,
                image_url: image_url,
                category: category
            });
            if (!product) {
                return response.status(400).json({
                    message: "Esse produto já existe!"
                });
            }
            return response.status(200).json(product);
        });
    }
}
exports.default = ProductController;
