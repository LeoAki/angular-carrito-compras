import { Injectable } from '@angular/core';
import { ProductsNs } from '../interfaces/products/products.ns';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private cartProducts: ProductsNs.Detail[] = [];
  private products!: BehaviorSubject<ProductsNs.Detail[]>;

  constructor() {
    this.products = new BehaviorSubject<ProductsNs.Detail[]>([]);
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.products.next(this.cartProducts);
  }

  addNewProduct(product: ProductsNs.Detail) {
    this.cartProducts.push(product);
    this.products.next(this.cartProducts);
  }

  get allProducts() {
    return this.products.asObservable();
  }

}
