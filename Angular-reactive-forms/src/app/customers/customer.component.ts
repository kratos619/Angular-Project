import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customer = new Customer();
  customerForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true),
    });
  }

  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm));
  }
}
