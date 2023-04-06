import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Product } from "../../../domain/product";
import { WishlistItem } from "../../../domain/wishlist-item";
import { ProductsService } from "../../services/products.service";
import { WishlistService } from "../../services/wishlist.service";
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  @Input() products: Product[] | null = [];
  private productsService = inject(ProductsService);
  private wishlistService = inject(WishlistService);
  products$ = this.productsService.products$;

  public productClick(product: Product) {
    this.wishlistService.addItem(product)
  }
}
