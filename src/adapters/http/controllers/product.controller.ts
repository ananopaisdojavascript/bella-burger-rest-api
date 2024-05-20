import { Request, Response } from 'express';
import Product from '../../../core/entity/product.entity';
import ProductService from '../../../core/services/productService.service';

class ProductController {
  constructor(private productService: ProductService) {}

  async getProducts(_request: Request, response: Response): Promise<Response> {
    const products = await this.productService.getProducts()
    if (!products) {
      return response.status(404).json({
        message: "Nenhum produto encontrado"
      })
    }
    return response.status(200).json(products)
  }

  async getProduct(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;
    const product = await this.productService.getProduct(product_id)
    if (!product) {
      return response.status(404).json({
        message: "Nenhum produto encontrado"
      })
    }
    return response.status(200).json(product)
  }

  async createProduct(request: Request, response: Response): Promise<Response> {
    const { name, price, image_url, category } = request.body;
    const product = await this.productService.createProduct({
      name: name,
      price: price,
      image_url: image_url,
      category: category
    } as Product)
    if (!product) {
      return response.status(400).json({
        message: "Esse produto já existe!"
      })
    }
    return response.status(200).json(product)
  }
}

export default ProductController;