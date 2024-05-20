import Product from "../entity/product.entity";

export interface IProductRepositoryPort {
  findAll(): Promise<Product[]>;
  findProductId(id: number | null | string): Promise<Product | null>
  createProduct(product: Product): Promise<Product>;
}