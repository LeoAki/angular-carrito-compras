import { Component } from '@angular/core';
import { ShopService } from '../../service/shop.service';
import { map, Observable, reduce } from 'rxjs';
import { ProductsNs } from '../../interfaces/products/products.ns';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shop-total',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './shop-total.component.html',
  styleUrl: './shop-total.component.css'
})
export class ShopTotalComponent {

  products$!: Observable<ProductsNs.Detail>;
  total: number = 0;

  constructor(private shopService: ShopService) {
    shopService.allProducts
    .pipe(map(product => {
      return product.reduce((previus, next) => previus + next.price, 0)
    }))
    .subscribe(val => {
      this.total = val;
    })
  }
}
