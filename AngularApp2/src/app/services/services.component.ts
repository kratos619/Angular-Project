import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class ServicesComponent implements OnInit {
  constructor(public http: Http) {}
  getusers() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .map(res => res.json());
  }
  ngOnInit() {}
}
