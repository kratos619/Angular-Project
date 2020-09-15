import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit, AfterViewInit {
  customer = new Customer();
  customerForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      notification: ['email'],
      sendCatalog: [true],
    });
  }

  setNotificaion(notifyVia: string) {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
    // console.log(event);
  }
  ngAfterViewInit() {
    // this.customerForm.setValue({
    //   firstName: 'gairav',
    //   lastName: 'pal',
    //   email: 'gaurav.pal@gmail.com',
    //   sendCatalog: true,
    // });
  }
  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm));
  }
}
