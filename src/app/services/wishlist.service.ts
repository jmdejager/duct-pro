import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map } from "rxjs";
import { Product } from "../../domain/product";
import { WishlistItem } from "../../domain/wishlist-item";
import { WishlistRepositoryInterface } from "../../domain/wishlistRepository.interface";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private isOpenSubject = new BehaviorSubject<boolean>(false);
  public isOpen$ = this.isOpenSubject.asObservable();

  private itemsSubject = new BehaviorSubject<WishlistItem[]>([]);
  public items$ = this.itemsSubject.asObservable();

  private wishlistRepository = inject(WishlistRepositoryInterface);

  public count$ = this.items$.pipe(
    map((items) => items.length)
  );
  constructor() {
    this.loadItemsFromStorage();
  }

  loadItemsFromStorage(){
    Promise.resolve(this.wishlistRepository.getAll()).then((items: WishlistItem[]) => {
      this.itemsSubject.next(items);
    })
  }

  public addItem(product: Product) {
    const items = [...this.itemsSubject.value];
    items.push(WishlistItem.fromProduct(product))
    this.itemsSubject.next(items)
    this.store();
  }

  public toggle() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  public store() {
    this.wishlistRepository.store(this.itemsSubject.value);
  }
}
