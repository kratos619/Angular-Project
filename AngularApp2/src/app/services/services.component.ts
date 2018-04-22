import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicesComponent implements OnInit {
  users: string[];
  constructor() {
    this.users = ['gaurav', 'saurabh', 'rohit', 'aryan'];
  }

  getusers() {
    return this.users;
  }

  ngOnInit() {}
}
