import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductRepositoryInterface } from "../domain/productRepository.interface";
import { WishlistRepositoryInterface } from "../domain/wishlistRepository.interface";
import { ProductRepositoryUsingJSON } from "../infra/ProductRepositoryUsingJSON";
import { WishlistRepositoryUsingLocalStorage } from "../infra/WishlistRepositoryUsingLocalStorage";

import { AppComponent } from './app.component';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { WishlistComponent } from "./components/wishlist/wishlist.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductListComponent,
    WishlistComponent,
  ],
  providers: [
    {
      provide: ProductRepositoryInterface,
      useClass: ProductRepositoryUsingJSON
    },
    {
      provide: WishlistRepositoryInterface,
      useClass: WishlistRepositoryUsingLocalStorage
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
