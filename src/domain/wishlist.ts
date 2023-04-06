import { WishlistItem } from "./wishlist-item";

export interface WishlistRecord {
  items: WishlistItem[]
}

export class Wishlist {
  constructor(
    public readonly items: WishlistItem[]
  ) {
  }
}
