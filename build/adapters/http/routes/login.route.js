"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeOrmLoginRepository_1 = __importDefault(require("../../secondaryAdapter/typeOrmLoginRepository"));
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
const loginService_service_1 = __importDefault(require("../../../core/services/loginService.service"));
const router = express_1.default.Router();
const loginRepository = new typeOrmLoginRepository_1.default();
const loginService = new loginService_service_1.default(loginRepository);
const loginController = new login_controller_1.default(loginService);
router.post("/login", loginController.createLogin.bind(loginController));
exports.default = router;
