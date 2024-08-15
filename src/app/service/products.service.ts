import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsNs } from '../interfaces/products/products.ns';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = 'https://dummyjson.com'
  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductsNs.List> {
    return this.http.get<ProductsNs.List>(this.apiUrl + '/products')
  }

  getById(id: number): Observable<ProductsNs.Detail> {
    return this.http.get<ProductsNs.Detail>(`${this.apiUrl}/products/${id}`)
  }

}
