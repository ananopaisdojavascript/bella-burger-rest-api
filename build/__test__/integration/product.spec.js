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
const data_source_1 = __importDefault(require("../../adapters/database/data-source"));
const app_1 = __importDefault(require("../../app"));
const product_entity_1 = __importDefault(require("../../core/entity/product.entity"));
const supertest_1 = __importDefault(require("supertest"));
const productsArr = [
    {
        "product_id": 1,
        "name": "Café Americano",
        "price": 5,
        "image_url": "https://res.cloudinary.com/ananopaisdojavascript/image/upload/v1716126384/burger-queen-image/american-coffee_p65gkk.jpg",
        "category": "Café da manhã"
    },
    {
        "product_id": 2,
        "name": "Café com Leite",
        "price": 7,
        "image_url": "https://res.cloudinary.com/ananopaisdojavascript/image/upload/v1716126384/burger-queen-image/coffee-with-milk_acssn5.jpg",
        "category": "Café da manhã"
    },
    {
        "product_id": 3,
        "name": "Sanduíche de Presunto com Queijo",
        "price": 10,
        "image_url": "https://res.cloudinary.com/ananopaisdojavascript/image/upload/v1716126386/burger-queen-image/sandwhich_tabqjj.jpg",
        "category": "Café da manhã"
    }
];
const product = {
    "product_id": 3,
    "name": "Sanduíche de Presunto com Queijo",
    "price": 10,
    "image_url": "https://res.cloudinary.com/ananopaisdojavascript/image/upload/v1716126386/burger-queen-image/sandwhich_tabqjj.jpg",
    "category": "Café da manhã"
};
describe('GET /products', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        data_source_1.default.setOptions({
            entities: [product_entity_1.default],
            synchronize: true,
            logging: true
        });
        yield data_source_1.default.initialize();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.default.destroy();
    }));
    it('should return a list of products', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/products').send(productsArr);
        expect(response.status).toBe(200);
    }));
    it('should return a specific product', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/products/3').send(product);
        expect(response.status).toBe(200);
    }));
});
