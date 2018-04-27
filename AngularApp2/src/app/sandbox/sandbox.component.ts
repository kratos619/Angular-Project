import { ServicesComponent } from './../services/services.component';
import { Customer } from './customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  styleUrls: ['./sandbox.component.css'],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent implements OnInit {
  users: any[];
  constructor(public dataservices: ServicesComponent) {
    this.dataservices.getusers().subscribe(users => {
      //  console.log(users);
      this.users = users;
    });
  }
  ngOnInit() {}
}
