"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeOrmUserRepository_1 = __importDefault(require("../../secondaryAdapter/typeOrmUserRepository"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userService_service_1 = __importDefault(require("../../../core/services/userService.service"));
const router = express_1.default.Router();
const userRepository = new typeOrmUserRepository_1.default();
const userService = new userService_service_1.default(userRepository);
const userController = new user_controller_1.default(userService);
router.post("/users", userController.createUser.bind(userController));
exports.default = router;
