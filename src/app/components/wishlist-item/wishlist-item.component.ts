import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistItem } from "../../../domain/wishlist-item";
import { WishlistRepositoryInterface } from "../../../domain/wishlistRepository.interface";
import { WishlistService } from "../../services/wishlist.service";
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-wishlist-item',
  standalone: true,
	imports: [CommonModule, ProductComponent],
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss']
})
export class WishlistItemComponent {

  private wishlistService = inject(WishlistService);
  @Input() public item?: WishlistItem;

  public add(item: WishlistItem) {
    if(!item) return;
    item.quantity++;
    this.wishlistService.store();
  }

  public remove(item: WishlistItem) {
    if(!item) return;
    item.quantity--;
    this.wishlistService.store();
  }
}
