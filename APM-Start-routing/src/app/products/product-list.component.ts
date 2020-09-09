import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import {
  ActivatedRoute,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Router,
  Event,
} from '@angular/router';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  loading = true;

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: Product[] = [];
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private _router: ActivatedRoute,
    private _route: Router
  ) {
    // this._route.events.subscribe((routerEvent: Event) => {
    //   this.checkRouterEvent(routerEvent);
    // });
  }

  ngOnInit(): void {
    this.listFilter = this._router.snapshot.queryParamMap.get('filterBy') || '';
    this.showImage =
      this._router.snapshot.queryParamMap.get('showImage') === 'true';
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.loading = false;
        this.products = products;
        this.filteredProducts = this.performFilter(this.listFilter);
      },
      error: (err) => {
        this.errorMessage = err;
        this.loading = true;
      },
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.loading = false;
    }
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: Product) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
