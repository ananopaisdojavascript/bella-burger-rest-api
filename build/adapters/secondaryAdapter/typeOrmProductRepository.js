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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_entity_1 = __importDefault(require("../../core/entity/product.entity"));
const data_source_1 = __importDefault(require("../database/data-source"));
class TypeOrmProductsRepositoryPort {
    constructor() {
        this.productsRepository = data_source_1.default.getRepository(product_entity_1.default);
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productsRepository.find();
            return products;
        });
    }
    findProductId(product_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = this.productsRepository.findOneBy({ product_id: product_id });
            if (!product)
                return null;
            return product;
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = yield this.productsRepository.save(product);
            return newProduct;
        });
    }
}
exports.default = TypeOrmProductsRepositoryPort;