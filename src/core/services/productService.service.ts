import Product from "../entity/product.entity";
import { IProductRepositoryPort } from "../ports/productRepositoryPort";

class ProductService {
  constructor(private readonly productRepository: IProductRepositoryPort) {}

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.findAll()
  }

  async getProduct(id: number): Promise<Product | null> {
    return await this.productRepository.findProductId(id)
  }

  async createProduct(product: Product): Promise<Product> {
    return await this.productRepository.createProduct(product)
  }
}

export default ProductService;