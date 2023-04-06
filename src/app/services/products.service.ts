import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Product } from "../../domain/product";
import { ProductRepositoryInterface } from "../../domain/productRepository.interface";
import { WishlistRepositoryInterface } from "../../domain/wishlistRepository.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productRepository = inject(ProductRepositoryInterface);
  private wishlistRepository = inject(WishlistRepositoryInterface);

  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();

  constructor() {
    Promise.resolve(this.productRepository.getAll()).then((products) => {
      this.productsSubject.next(products);
    })

  }
}
