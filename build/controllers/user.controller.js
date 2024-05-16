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
const user_entity_1 = __importDefault(require("../entity/user.entity"));
const data_source_1 = require("../data-source");
const createUser = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield data_source_1.AppDataSource.getRepository(user_entity_1.default).save(request.body);
        response.status(201).send(request.body);
    }
    catch (error) {
        next(error);
    }
});
const getUsers = (_request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield data_source_1.AppDataSource.getRepository(user_entity_1.default).find().then(users => {
            response.status(200).send(users);
        });
    }
    catch (error) {
        next(error);
    }
});
const getUser = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield data_source_1.AppDataSource.getRepository(user_entity_1.default).findOneBy({
            id: request.params.id
        })
            .then(user => {
            response.status(200).send(user);
        });
    }
    catch (error) {
        next(error);
    }
});
const updateUser = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield data_source_1.AppDataSource.getRepository(user_entity_1.default).findOneBy({
            id: request.params.id,
        });
        if (user) {
            data_source_1.AppDataSource.getRepository(user_entity_1.default).merge(user, request.body);
            const results = yield data_source_1.AppDataSource.getRepository(user_entity_1.default).save(user);
            return response.send(results);
        }
        else {
            return response.status(404).send("User not found");
        }
    }
    catch (error) {
        next(error);
    }
});
const deleteUser = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield data_source_1.AppDataSource.getRepository(user_entity_1.default).delete(request.params.id);
        return response.send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.default = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};
