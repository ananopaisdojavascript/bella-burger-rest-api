import express from 'express';
import OrderController from '../controllers/order.controller';

const router = express.Router()

router.get('/orders', OrderController.getOrders)
router.post('/orders', OrderController.createOrder)
router.get('/orders/:id', OrderController.getOrder)
router.put('/orders/:id', OrderController.updateOrder)
router.delete('/orders/:id', OrderController.deleteOrder)

export default router;