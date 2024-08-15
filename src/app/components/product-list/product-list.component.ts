import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Observable } from 'rxjs';
import { ProductsNs } from '../../interfaces/products/products.ns';
import { AsyncPipe } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AsyncPipe, ProductDetailComponent, ShopComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  public produtList$!: Observable<ProductsNs.List>;

  constructor(productService: ProductsService) {
    this.produtList$ = productService.getAll();
  }

}
