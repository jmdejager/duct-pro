import { Component, HostBinding, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from "../../services/wishlist.service";
import { WishlistItemComponent } from "../wishlist-item/wishlist-item.component";

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, WishlistItemComponent],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  private wishlistService = inject(WishlistService);

  public open$ = this.wishlistService.isOpen$;
  @HostBinding('class.open') open = false;
  public items$ = this.wishlistService.items$;

}
