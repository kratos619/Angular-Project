import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuardsGuard implements CanActivate {
 constructor(private route:Router) {
 }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   let param = +next.paramMap.get('id');
   if (param === 0 || undefined || null){
     alert("invalid param");
     this.route.navigate(['/products']);
     return false;
   }
    return true;
  }

}
