import { ServicesComponent } from './../services/services.component';
import { Customer } from './customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  styleUrls: ['./sandbox.component.css'],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent implements OnInit {
  ngOnInit;

  constructor(public services: ServicesComponent) {
    console.log(this.services.getusers());
  }
}
