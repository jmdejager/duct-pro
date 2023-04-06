import { Component, inject } from '@angular/core';
import { ProductsService } from "./services/products.service";
import { WishlistService } from "./services/wishlist.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private productsService = inject(ProductsService)
  private wishlistService = inject(WishlistService)
  public wishlistCount$ = this.wishlistService.count$;
  public products$ = this.productsService.products$;

  public toggleWishlist() {
    this.wishlistService.toggle()
  }
}
