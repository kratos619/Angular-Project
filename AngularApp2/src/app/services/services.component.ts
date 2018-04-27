import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicesComponent implements OnInit {
  data: Observable<Array<number>>;
  constructor() {}
  getData() {
    this.data = new Observable(observe => {
      setTimeout(() => {
        observe.next(1);
      }, 1000);
      setTimeout(() => {
        observe.next(2);
      }, 2000);
      setTimeout(() => {
        observe.next(3);
      }, 3000);
      setTimeout(() => {
        observe.next(4);
      }, 4000);
    });

    return this.services;
  }
  ngOnInit() {}
}
