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
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, confirm_email, password, salon, kitchen } = request.body;
            const encryptPassword = yield encrypt_1.default.passwordEncrypt(password);
            const newUser = yield this.userService.createUser({
                name: name,
                email: email,
                confirm_email: confirm_email,
                password: encryptPassword,
                confirm_password: encryptPassword,
                salon: salon,
                kitchen: kitchen
            });
            if (!newUser) {
                return response.status(400).json({
                    message: "Esse usuário já existe!"
                });
            }
            const token = yield encrypt_1.default.generateToken({
                id: newUser.id
            });
            return response.status(200).json({
                user: newUser, token
            });
        });
    }
}
exports.default = UserController;
