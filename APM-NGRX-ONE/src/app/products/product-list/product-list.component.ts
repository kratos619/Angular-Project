import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription, Observable } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import {
  getShowProductCode,
  ProductState,
  State,
} from '../state/product.reducer';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;

  constructor(
    private _store: Store<State>,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.sub = this.productService.selectedProductChanges$.subscribe(
      (currentProduct) => (this.selectedProduct = currentProduct)
    );

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => (this.products = products),
      error: (err) => (this.errorMessage = err),
    });

    this._store.select(getShowProductCode).subscribe((showProduct) => {
      console.log('subscribe', showProduct);
      this.displayCode = showProduct;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    // this._store.unsubscribe();
  }

  checkChanged(): void {
    // this.displayCode = !this.displayCode;
    this._store.dispatch({
      type: '[product] toggle product code',
    });
  }

  newProduct(): void {
    this.productService.changeSelectedProduct(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    console.log('product', product);

    this.productService.changeSelectedProduct(product);
  }
}
