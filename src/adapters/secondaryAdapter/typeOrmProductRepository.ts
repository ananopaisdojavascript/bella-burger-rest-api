import Product from "../../core/entity/product.entity";
import { IProductRepositoryPort } from "../../core/ports/productRepositoryPort";
import AppDataSource from "../database/data-source";

class TypeOrmProductsRepositoryPort implements IProductRepositoryPort {
  private productsRepository = AppDataSource.getRepository(Product);
  
  async findAll(): Promise<Product[]> {
    const products = await this.productsRepository.find();
    return products;
  }
  
  async findProductId(product_id: any): Promise<Product | null> {
    const product = this.productsRepository.findOneBy({product_id})
    return product
  }

  async createProduct(product: Product): Promise<Product> {
      const newProduct = await this.productsRepository.save(product)
      return newProduct
  }
}

export default TypeOrmProductsRepositoryPort;