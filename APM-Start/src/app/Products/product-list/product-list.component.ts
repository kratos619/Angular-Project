import { Component, OnInit } from '@angular/core';
import { IProductList } from './Product.interface'
@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImgs = false;
  filteredProducts: IProductList[];

  products: IProductList[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
  ];

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
  constructor() { 
    this.filteredProducts = this.products;
  }

  toggleImageView() {
    this.showImgs = !this.showImgs;
  }

  ngOnInit(): void { }
}

