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
const encrypt_1 = __importDefault(require("../../helpers/encrypt"));
class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    createLogin(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, salon, kitchen } = request.body;
            const encryptPassword = yield encrypt_1.default.passwordEncrypt(password);
            const login = yield this.loginService.createLogin({
                email: email,
                password: encryptPassword,
                salon: salon,
                kitchen: kitchen
            });
            const token = yield encrypt_1.default.generateToken({ id: login.id });
            return response.status(200).json({
                login: login, token
            });
        });
    }
}
exports.default = LoginController;
