import { Component, OnInit } from '@angular/core';
import { IProductList } from './Product.interface'
import { ProductService } from '../../services/product.service'
import {HttpserviceService} from '../../services/httpservice.service';
import {map} from 'rxjs/operators'
@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImgs = false;
  filteredProducts: IProductList[];
  productRating: number;
  products: IProductList[] = [];

  private _filterBy: string;

  public get filterBy(): string {
    return this._filterBy;
  }
  public set filterBy(value: string) {
    this._filterBy = value;
    this.filteredProducts = this.filterBy ? this.perFormFilter(this.filterBy) : this.products;
  }

  perFormFilter(filterBy: string): IProductList[] {
    filterBy = filterBy.toLowerCase();
    console.log('filterBy', filterBy);

    return this.products.filter((product: IProductList) => {
      return product.productName.toLowerCase().indexOf(filterBy) !== -1;
    });
  }
  testData ;
  testError ;
  constructor(protected productService: ProductService,private webdata : HttpserviceService) {


  }

  toggleImageView() {
    this.showImgs = !this.showImgs;
  }

  ratingHandler(event) {
    console.log('event', event);
    this.productRating = event;

  }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    // this.filteredProducts = this.products;

    this.webdata.getData('api/products/products.json')
      .subscribe({
        next: (data:IProductList[]) => {
          this.products = data;
          this.filteredProducts = this.products;
        },
        error: (err) => { console.log('error aala', err) }
      });
  }
}

