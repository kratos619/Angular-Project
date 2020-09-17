import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'http://laraangular.example.com/api/';

  constructor(private http: HttpClient) {}
  getUsersList(url) {
    return this.http.get(`${this.baseUrl}${url}`);
  }
}
