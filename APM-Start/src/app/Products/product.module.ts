import { NgModule } from '@angular/core';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductsdetailsComponent} from './productsdetails/productsdetails.component';
import {RouterModule} from '@angular/router';
import {ProductDetailsGuardsGuard} from '../guards/product-details-guards.guard';
import { SharedModule } from '../shared/shared.module';

const routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', canActivate: [ProductDetailsGuardsGuard], component: ProductsdetailsComponent },
];
@NgModule({
  declarations: [
    ProductListComponent,
    ProductsdetailsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ProductModule { }
