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
const data_source_1 = __importDefault(require("../adapters/database/data-source"));
const app_1 = __importDefault(require("../app"));
const user_entity_1 = __importDefault(require("../core/entity/user.entity"));
const supertest_1 = __importDefault(require("supertest"));
const newUser = {
    "name": "Gabrielly Marcela Lívia Ferreira",
    "email": "gabrielly.marcela.ferreira@dinamicaconsultoria.com",
    "confirm_email": "gabrielly.marcela.ferreira@dinamicaconsultoria.com",
    "password": "hdsaLuqR5U",
    "confirm_password": "hdsaLuqR5U",
    "salon": false,
    "kitchen": true
};
describe('POST /user', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        data_source_1.default.setOptions({
            entities: [user_entity_1.default],
            synchronize: true,
            logging: true
        });
        yield data_source_1.default.initialize();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.default.destroy();
    }));
    it('should create a new user', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post('/users').send(newUser);
        expect(response.status).toBe(200);
    }));
});
