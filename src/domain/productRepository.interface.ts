import { InjectionToken } from "@angular/core";
import { Product } from "./product";

export const ProductRepositoryInterface = new InjectionToken<ProductRepositoryInterface>('ProductRepositoryInterface')
export interface ProductRepositoryInterface {
  getAll(): Product[] | Promise<Product[]>
}
