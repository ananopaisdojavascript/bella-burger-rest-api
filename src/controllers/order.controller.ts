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
    let order;
    const findProduct = await AppDataSource.getRepository(Products)
      .find({
        select: {
          product_id: true
        }
      })

    const { client_name, server_name, table_number, quantity, product_id } = request.body
    if (findProduct) {
      order = await AppDataSource.getRepository(Orders).save({
        client_name: client_name,
        server_name: server_name,
        table_number: table_number,
        quantity: quantity,
        product_id: product_id
      })
    }

    if (!order) {
      return response.status(400).json({ message: "Esse pedido já existe!" });
    }
    logger.info(`POST /orders - ${JSON.stringify(order)}`);
    return response.status(200).json(order)

  } catch (error) {
    next(error)
  }

}

async function updateOrder(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const order = await AppDataSource.getRepository(Orders).findOneBy({ order_id: parseInt(id) })
    if (order) {
      AppDataSource.getRepository(Orders).merge(order, request.body);
      const results = await AppDataSource.getRepository(Orders).save(order);
      logger.info(`PUT /orders - ${JSON.stringify(order)}`);
      return response.send(results);
    } else {
      return response.status(404).send("User not found");
    }

  } catch (error) {
    next(error)
  }

}

async function deleteOrder(request: Request, response: Response, next: NextFunction) {
  try {
    const results = await AppDataSource.getRepository(Orders).delete(request.params.id)
    return response.send(results)
  } catch (error) {
    next(error)
  }
}

export default {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
}