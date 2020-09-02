import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../Token/token.service';

@Injectable({
  providedIn: 'root',
})
export class BrfoureloginService implements CanActivate {
  constructor(private _tokenService: TokenService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | import('@angular/router').UrlTree
    | import('rxjs').Observable<boolean | import('@angular/router').UrlTree>
    | Promise<boolean | import('@angular/router').UrlTree> {
    return !this._tokenService.isLoggedIn();
  }
}
