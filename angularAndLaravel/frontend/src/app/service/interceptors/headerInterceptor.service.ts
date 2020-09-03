import { TokenService } from './../Token/token.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenHeaderInterceptor implements HttpInterceptor {
  constructor(private _token : TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this._token.get()}`);
    const authReq = req.clone({ headers });
    console.log('authReq', authReq);

    return next.handle(authReq);
  }
}
