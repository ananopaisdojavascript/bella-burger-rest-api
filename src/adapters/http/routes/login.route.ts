import express from 'express';
import TypeOrmLoginRepositoryPort from '../../secondaryAdapter/typeOrmLoginRepository';
import LoginController from '../controllers/login.controller';
import LoginService from '../../../core/services/loginService.service';

const router = express.Router()
const loginRepository = new TypeOrmLoginRepositoryPort()
const loginService = new LoginService(loginRepository)
const loginController = new LoginController(loginService)

router.post("/login", loginController.createLogin.bind(loginController))

export default router;