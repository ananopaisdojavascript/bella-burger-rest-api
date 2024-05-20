import Product from "../entity/product.entity";

export interface IProductRepositoryPort {
  findAll(): Promise<Product[]>;
  createProduct(product: Product): Promise<Product>;
}