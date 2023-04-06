import { InjectionToken } from "@angular/core";
import { WishlistItem } from "./wishlist-item";

export const WishlistRepositoryInterface = new InjectionToken<WishlistRepositoryInterface>('ProductRepositoryInterface')
export interface WishlistRepositoryInterface {
  getAll(): WishlistItem[] | Promise<WishlistItem[]>
  store(items: WishlistItem[]): void
}
