import { Product } from "./product";

export interface WishlistItemRecord {
  productId: string,
  quantity: number,
}

export class WishlistItem {
  private constructor(
    public readonly product: Product,
    public quantity: number,
  ) {
  }

  public static fromProduct(product: Product) {
    return new WishlistItem(product, 1);
  }
}
