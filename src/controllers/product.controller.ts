import { Request, Response, NextFunction } from 'express';
import Products from '../entity/product.entity';
import AppDataSource from '../database/data-source';
import { logger } from '../app';

async function getProducts(_request: Request, response: Response, next: NextFunction) {
  try {
    const products = await AppDataSource.getRepository(Products).find()
    logger.info('GET /products')
    return response.json(products)
  } catch (error) {
    next(error)
  }
}

async function getProduct(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const product = await AppDataSource.getRepository(Products).findOneBy({ product_id: parseInt(id) })
    logger.info('GET /products/:id')
    response.status(200).send(product)
  } catch (error) {
    next(error)
  }
}

async function createProduct(request: Request, response: Response, next: NextFunction) {
  try {
    const { name, price, url, category } = request.body
    const product = await AppDataSource.getRepository(Products).save({
      name: name,
      price: price,
      url: url,
      category: category
    })

    if (!product) {
      return response.status(400).json({ message: "Esse usuário já existe!" });
    }
    logger.info(`POST /products - ${JSON.stringify(product)}`);
    return response.status(200).json(product)
  } catch (error) {
    next(error)
  }

}

export default {
  getProducts,
  createProduct,
  getProduct
}
