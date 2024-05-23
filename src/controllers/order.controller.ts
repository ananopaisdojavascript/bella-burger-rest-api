import { Request, Response, NextFunction } from "express";
import AppDataSource from "../database/data-source";
import Orders from "../entity/order.entity";
import Products from "../entity/product.entity";
import { logger } from "../app";

async function getOrders(_request: Request, response: Response, next: NextFunction) {
  try {
    const orders = await AppDataSource.getRepository(Orders).find()
    logger.info('GET /orders')
    return response.json(orders)
  } catch (error) {
    next(error)
  }
}

async function getOrder(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const order = await AppDataSource.getRepository(Orders).findOneBy({ order_id: parseInt(id) })
    logger.info('GET /orders/:id')
    response.status(200).send(order)
  } catch (error) {
    next(error)
  }
}

async function createOrder(request: Request, response: Response, next: NextFunction) {
  try {
    
  } catch (error) {
    next(error)
  }

}

export default {
  getOrders,
  getOrder,
  createOrder
}