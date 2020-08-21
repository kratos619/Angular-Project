import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {IProductList} from '../Products/product-list/Product.interface';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) {}


  getData(url):Observable<object>{
    return  this.http.get(url).pipe(
      tap((data) => {return data}),
    )
  }
}
