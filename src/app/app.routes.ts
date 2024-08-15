import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'productos', loadComponent: () => import('./components/product-list/product-list.component').then((c)=> c.ProductListComponent)
  }
];
