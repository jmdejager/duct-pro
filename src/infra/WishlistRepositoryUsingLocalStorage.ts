import { WishlistItem } from "../domain/wishlist-item";
import { WishlistRepositoryInterface } from "../domain/wishlistRepository.interface";

export class WishlistRepositoryUsingLocalStorage implements WishlistRepositoryInterface {
  public getAll(): WishlistItem[] | Promise<WishlistItem[]> {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
  }

  public store(items: WishlistItem[]): void {
    localStorage.setItem('wishlist', JSON.stringify(items))
  }
}
