import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ServicesComponent implements OnInit {
  constructor(public http: Http) {}

  getusers() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .map(res => res.json());
  }
  adduser(user) {
    return this.http
      .post('https://jsonplaceholder.typicode.com/users', user)
      .map(res => res.json());
  }
  deleteuser(id) {
    return this.http
      .post('https://jsonplaceholder.typicode.com/users/', +id)
      .map(res => res.json());
  }
  ngOnInit() {}
}
