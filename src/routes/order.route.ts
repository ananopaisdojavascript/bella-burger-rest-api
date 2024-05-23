import express from 'express';
import OrderController from '../controllers/order.controller';

const router = express.Router()

router.get('/orders', OrderController.getOrders)
router.post('/orders', OrderController.createOrder)
router.get('/orders/:id', OrderController.getOrder)

export default router;