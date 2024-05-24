import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router()

router.get('/users', UserController.getUsers)
router.post('/users', UserController.createUser)
router.get('/users/:id', UserController.getUser)
router.delete('/users/:id', UserController.deleteUser)

export default router;