import { Product, ProductRecord } from "../domain/product";
import { ProductRepositoryInterface } from "../domain/productRepository.interface";
import products from "./products.json";


export class ProductRepositoryUsingJSON implements ProductRepositoryInterface {
  public getAll(): Product[] | Promise<Product[]> {
    return products.map((product: ProductRecord) => Product.fromRecord(product));
  }
}
