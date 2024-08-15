import { Component } from '@angular/core';
import { ShopService } from '../../service/shop.service';
import { Observable } from 'rxjs';
import { ProductsNs } from '../../interfaces/products/products.ns';
import { AsyncPipe } from '@angular/common';
import { ShopTotalComponent } from '../shop-total/shop-total.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [AsyncPipe, ShopTotalComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  products$!:Observable<ProductsNs.Detail[]>;
  constructor(private shopService: ShopService) {
    this.products$ = shopService.allProducts;
  }

}
