import { ChangeDetectionStrategy, Component, effect, input, ViewEncapsulation } from '@angular/core';
import { ProductsNs } from '../../interfaces/products/products.ns';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { ShopService } from '../../service/shop.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [AsyncPipe, MatButton, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProductDetailComponent {
  data = input<ProductsNs.Detail>();

  constructor(private shopService: ShopService) {

    // effect(() => {
    //   console.log(this.data());
    // });
  }

  addShop() {
    this.shopService.addNewProduct(this.data()!);
  }
}
