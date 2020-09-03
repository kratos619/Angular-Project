
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../Token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/api/';
  private loggedIn = new BehaviorSubject<boolean>(this._token.isLoggedIn());
  authStatus = this.loggedIn.asObservable();
  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  constructor(private http: HttpClient, private _token: TokenService) {}

  login(url, body) {
    return this.http.post(`${this.baseUrl}${url}`, body);
  }

  registerUser(url, body) {
    return this.http.post(`${this.baseUrl}${url}`, body);
  }
  logOut(url){
    return this.http.post(`${this.baseUrl}${url}`,{});
  }
}
