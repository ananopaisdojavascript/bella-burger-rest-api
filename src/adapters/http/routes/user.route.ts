import express from 'express';
import TypeOrmUserRepositoryPort from '../../secondaryAdapter/typeOrmUserRepository';
import UserController from '../controllers/user.controller';
import UserService from '../../../core/services/userService.service';

const router = express.Router()
const userRepository = new TypeOrmUserRepositoryPort()
const userService = new UserService(userRepository)
const userController = new UserController(userService)

router.post("/users", userController.createUser.bind(userController))

export default router;